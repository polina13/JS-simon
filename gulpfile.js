var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
var jshint = require('gulp-jshint');

gulp.task('jsBrowserify', function() {
  return browserify( { entries: ['./js/browser.js'] })
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task("minifyScripts", ["jsBrowserify"], function(){
  return gulp.src("./build/js/app.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
});

gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});

// gulp.task('jshint', function(){
//   return gulp.src(['./js/*.js'])
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });

// To check if it displays in the terminal: use gulp myWord****
// gulp.task('myWord', function() {
//   console.log("hello");
// });
