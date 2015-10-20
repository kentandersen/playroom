var gulp = require("gulp");
var gutil = require("gulp-util")
var source = require("vinyl-source-stream");

var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");



gulp.task("html", function() {
  return gulp.src("./src/index.html")
    .pipe(gulp.dest("./build"));
});

var setupBro = function() {
  return browserify({ debug: true })
    .transform(babelify)
    .require("./src/main.js", { entry: true })
};

var bundleBro = function(bro, log) {
  var start = Date.now();
  var b = bro.bundle()
    .pipe(source("main.js"))
    .pipe(gulp.dest("./build"));

    if(log) {
      b.on("end", function() {
        gutil.log("Bundle done after", gutil.colors.magenta((Date.now() - start) + " ms"));
      });
    }

    return b;
};

gulp.task("js", function() {
  return bundleBro(setupBro())
});

gulp.task("dev", function () {
  var b = watchify(setupBro());
  b.on("update", bundleBro.bind(null, b, true));
  return bundleBro(b);
});

gulp.task("default", ["js", "html"]);
