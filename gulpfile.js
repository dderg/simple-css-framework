var gulp = require('gulp');
var combineMediaQueries = require('gulp-combine-media-queries');
var stylus = require('gulp-stylus');

gulp.task('ex_stylus', function () {
    return gulp.src('./example/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./example'));
});


gulp.task('example', ['ex_stylus']);

gulp.task('stylus', function () {
    return gulp.src('./src/grid.styl')
        .pipe(stylus())
        .pipe(combineMediaQueries())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./example/main.styl', ['ex_stylus']);
    gulp.watch('./src/grid.styl', ['stylus', 'ex_stylus']);
});

gulp.task('build', ['stylus', 'example']);
gulp.task('default', ['build', 'watch']);