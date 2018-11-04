var gulp = require("gulp");
var del = require("del");
var runSequence = require("run-sequence");
const webpack_stream = require('webpack-stream')
const webpack_config = require('./webpack.config.js');

gulp.task("clean:dist", () => {
  return del.sync("dist");
});

gulp.task("html", () => {
  return gulp.src("index.html").pipe(gulp.dest("dist"));
});


gulp.task('webpack', () => {
    return webpack_stream(webpack_config)
        .pipe(gulp.dest("dist"));
});

gulp.task("build", (callback) => {
  runSequence("clean:dist", "html", "webpack", callback);
});
