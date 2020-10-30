'use-strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemap = require('gulp-sourcemaps');
var del = require('del');
var cleanCss = require('gulp-clean-css');
// var uglify = require('gulp-uglify');

sass.compiler = require('node-sass');

// Compile css with mappings
gulp.task('scss', () => {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sourcemap.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemap.write('./'))
		.pipe(gulp.dest('dist/css/'));
});

gulp.task('compress', () => {
	return gulp.src('dist/css/*.css')
		.pipe(cleanCss())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('map', () => {
	return gulp.src('')
})

gulp.task('clean', () => {
	return del([
		'dist/*'
	]);
});

gulp.task('default', gulp.series(['clean', 'scss', 'compress']));
