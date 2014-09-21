var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('webserver', function() {
    connect.server({
        root: 'src',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(connect.reload());
});

gulp.task('sass', function() {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('js', function() {
    gulp.src('./src/js/*.js')
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch([
        './src/*.html',
        './src/sass/**/*.scss',
        './src/js/*.js'
    ], [
        'html',
        'sass',
        'js'
    ]);
});

gulp.task('default', [
    'webserver',
    'watch'
]);