var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    gulp.src('./assets/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/*.scss', ['sass']);

    // Create LiveReload server
    livereload.listen();

    // Watch any files in dist/, reload on change
    gulp.watch(['./assets/scss/*.scss','index.html']).on('change', livereload.changed);
});

gulp.task('default', [], function() {
    gulp.start('sass');
});
