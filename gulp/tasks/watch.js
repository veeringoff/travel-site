var gulp = require("gulp"),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})

});
/* note: gulp.task middle parameter is an array of tasks that must run
   and complete before the task function is executed. */
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});