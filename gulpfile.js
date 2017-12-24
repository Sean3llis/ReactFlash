'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss']
    }).on('error', sass.logError))
    .pipe(rename('App.css'))
    .pipe(gulp.dest('./src'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});
