
var gulp = require('gulp');


// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync');



// gulp.task('hello', function() {

//     console.log('Hello World!');


// });

// gulp.task('sass', function(){
//     return gulp.src('source-files')
//       .pipe(sass()) // Using gulp-sass
//       .pipe(gulp.dest('destination'))
//   });

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// *.scss ： * 号匹配当前目录任意文件，所以这里 *.scss 匹配当前目录下所有scss文件
// **/*.scss ：匹配当前目录及其子目录下的所有scss文件。
// !not-me.scss ：！号移除匹配的文件，这里将移除not-me.scss
// *.+(scss|sass) ：+号后面会跟着圆括号，里面的元素用|分割，匹配多个选项。这里将匹配scss和sass文件。
// gulp.task('watch', function(){
//   gulp.watch('app/scss/**/*.scss', ['sass']);   //会报错error 这个是由于require引入的包的版本问题导致的。在不同的版本里，接口参数发生了变化。在gulp4.0之后已经只能接受watch第二个参数必须为函数。
//   // Other watchers
// })
// gulp.task('watch',()=>{
//   gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
// });

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});



gulp.task('watch', gulp.series(['browserSync', 'sass'], function (){
  // gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
}));


// gulp.task('hello', function() {

//     console.log('Hello World!');


// });

// gulp.task('sass', function(){
//     return gulp.src('source-files')
//       .pipe(sass()) // Using gulp-sass
//       .pipe(gulp.dest('destination'))
//   });

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
});

