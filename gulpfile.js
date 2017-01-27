// require
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
	gulp.src('stylesheet/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./stylesheet/css/'));
});

gulp.task('production', function() {
	gulp.src('stylesheet/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(cleanCSS())
	.pipe(gulp.dest('./stylesheet/css/'));
});

// tasks
gulp.task('default', ['production'], function() {
	gulp.watch('stylesheet/sass/**/*.scss', ['sass']);	
});