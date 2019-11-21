var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCss = require("gulp-clean-css");
var rename = require("gulp-rename");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config");

var paths = {
  sass: ["./scss/**/*.scss"],
  app: ["./app/**/*.*"]
};

gulp.task("sass", function(done) {
  gulp
    .src("./scss/ionic.app.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./www/css/"))
    .pipe(
      cleanCss({
        keepSpecialComments: 0
      })
    )
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gulp.dest("./www/css/"))
    .on("end", done);
});

gulp.task("build", function(done) {
  const config = Object.assign({}, webpackConfig);
  config.optimization.minimize = true;
  webpack(config, function(err, stats) {
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        chunks: false,
        exclude: ["node_modules"]
      })
    );
    done();
  });
});

gulp.task("build-watch", function() {
  const config = Object.assign({}, webpackConfig);
  config.watch = true;
  webpack(config, function(err, stats) {
    console.log(
      stats.toString({
        colors: true,
        modules: false,
        chunks: false,
        exclude: ["node_modules"]
      })
    );
  });
});

gulp.task("watch", ["sass", "build-watch"], function() {
  gulp.watch(paths.sass, ["sass"]);
  gulp.watch(paths.app, ["build-watch"]);
});

// /**
//  * Ionic hooks
//  * Add ':before' or ':after' to any Ionic project command name to run the specified
//  * tasks before or after the command.
//  */
// gulp.task("serve:before", ["watch"]);
// gulp.task("emulate:before", ["build"]);
// gulp.task("deploy:before", ["build"]);
// gulp.task("build:before", ["build"]);
// // add support for cli v3
// gulp.task("ionic:watch:before", ["watch"]);
// gulp.task("ionic:build:before", ["build"]);
// gulp.task("ionic:serve:before", ["watch"]);

// gulp.task("default", ["build"]);
