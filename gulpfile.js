var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('stylus', function () {
    return gulp.src('./example/main.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./example'));
});

gulp.task('watch', function () {
    gulp.watch('./examplemain.styl', ['stylus']);
    gulp.watch('./src/grid.styl', ['stylus']);
});

gulp.task('default', ['stylus', 'watch']);
