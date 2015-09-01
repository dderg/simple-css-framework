var gulp = require('gulp');
var combineMediaQueries = require('gulp-combine-media-queries');
var stylus = require('gulp-stylus');

gulp.task('ex_stylus', function () {
    return gulp.src('./example/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./example'));
});

gulp.task('ex_watch', function () {
    gulp.watch('./example/main.styl', ['ex_stylus']);
    gulp.watch('./src/grid.styl', ['ex_stylus']);
});

gulp.task('example', ['ex_stylus', 'ex_watch']);

gulp.task('stylus', function () {
    return gulp.src('./src/grid.styl')
        .pipe(stylus())
        .pipe(combineMediaQueries())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/grid.styl', ['stylus']);
});

gulp.task('build', ['stylus', 'watch']);
gulp.task('default', ['example', 'build']);