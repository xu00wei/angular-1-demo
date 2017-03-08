var fs = require('fs');
var del = require('del');
var path = require('path');
var merge = require('merge-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');

var scriptsPath = './js';
var scriptsDebugPath = './js/debug'
var watchs = ["js/**/*.js","!js/debug/*.js","!js/**/*.min.js"];

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

function work(){
    var folders = getFolders(scriptsPath);
    var tasks = folders.map(function(folder) {
        if(folder!="debug") {
            console.log('------------'+folder+'------------');
            return gulp.src(path.join(scriptsPath, folder, '/*.js'))
                .pipe(ngAnnotate())
                .pipe(concat(folder + '.js'))
                .pipe(gulp.dest(scriptsDebugPath))
                // .pipe(uglify())
                // .pipe(rename(folder + '.min.js'))
                // .pipe(gulp.dest(scriptsPath));
            return merge(tasks);

        }
    });
}

gulp.task('scripts', work);

//gulp.task('delete:debug',['scripts'],function(cb){
    //del([
        //'./js/debug.min.js'
    //], cb);
//})

gulp.task("watch:scripts",['scripts'],function(){
     gulp.watch(watchs,function(event){
        work();
        console.log(event.path);
     });
})
//gulp.task('default',['scripts']);
