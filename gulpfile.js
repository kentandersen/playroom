var fs = require("fs");
var Stream = require('stream');

var browserify = require("browserify");
var gulp = require('gulp');
var transform = require('vinyl-transform');



var fileBuffer = fs.readFileSync("./src/main.js");

var s = new Stream.Readable();
s.push(fileBuffer);
s.push(null);

// var b = browserify(s, {
//   basedir: __dirname + "/src/"
// }).bundle();


gulp.task("default", function() {
  return gulp.src("src/main.js")
    .pipe(transform(function(filename) {
      return browserify(s, {
        basedir: __dirname + "/src/"
      })
      .bundle();
    }))
    .on('data', function(chunk) {
        var contents = chunk.contents.toString().trim();
        var bufLength = process.stdout.columns;
        var hr = '\n\n' + Array(bufLength).join("_") + '\n\n'
        if (contents.length > 1) {
            process.stdout.write(chunk.path + '\n' + contents + '\n');
            process.stdout.write(chunk.path + hr);
        }
    });
});
