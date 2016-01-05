var exec = require('child-process-promise').exec;
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build', [], function (done) {
    exec('tsd install')
        .then(function () { return exec('tsc -p src') })
        .then(function (result) {
            console.error(result.stderr);
            if (!result.error) {
                // I don't know if this really works.
                gulp.src(['./src/expect.d.ts', './bin/index.d.ts'])
                    .pipe(concat('expect-async.d.ts'))
                    .pipe(gulp.dest('./bin'));
            }


        })
});

