var gulp = require('gulp');  
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');
var del = require('del');

//style paths
var sassFiles = 'src/styles/*.scss',  
    cssDest = 'src/App.css';

gulp.task('styles', function(){  
    var scssStream = gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('scss-files.scss'));


	var mergedStream = merge(scssStream)
        .pipe(concat('App.css'))
        .pipe(minify())
        .pipe(gulp.dest('src/'));
	return mergedStream;

});
/*
if gulp watch error (ENOSPC), in Linux run following command.
/*echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
**/

gulp.task('default',function() {
    gulp.watch(sassFiles,['styles']);
});