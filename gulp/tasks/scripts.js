var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            colsole.log(err.toString());            
        }
        console.log(stats.toString());
        callback(); /* by calling the function specified in the 1st annon func, it makes sure all tasks have completed before returning. */ 
    });
});