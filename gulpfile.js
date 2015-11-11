var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	minifyCss = require('gulp-minify-css');


gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('concat.css'))
    .pipe(minifyCss())
    .pipe(rename('concat.min.css'))
    .pipe(gulp.dest('css/'))
    .pipe(notify('Done!'));
});

gulp.task('watch', function(){
	gulp.watch('css/*.css', ['default'])
});