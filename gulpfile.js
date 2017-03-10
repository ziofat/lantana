const gulp = require('gulp');
const del = require('del');

gulp.task('clean', () => del(['app/**/*.html', 'app/**/*.css']));

gulp.task('copy', ['clean'], (cb) => {
	gulp.src([
		'./src/**/*',
		'!./src/**/*.ts',
	], { base: './src' })
	.pipe(gulp.dest('app'))
	.on('end', cb);
});

gulp.task('default', ['clean', 'copy']);

gulp.task('watch', () => {
	gulp.watch([
		'./src/**/*.html',
		'./src/**/*.css',
		'./styles.css',
		'gulpfile.js',
	], ['copy']);
});
