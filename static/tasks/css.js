var gulp = require("gulp");
var concat = require("gulp-concat");
var gutil = require("gulp-util");
var minifyCss = require("gulp-minify-css");

gulp.task("concat", function(){
    return gulp.src("./css/styles/*.css")
        .pipe(concat("all.min.css"))
        .pipe(minifyCss().on("error",gutil.log))
        .pipe(gulp.dest("./css"));
})

gulp.task("watch:css",function(){
    gulp.watch(["./css/styles/*.css"],["concat"]);
})
