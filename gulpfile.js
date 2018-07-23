
var gulp = require('gulp');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        }
    })
})

gulp.task('sass', function () {
    return gulp.src('app/assets/scss/styles.scss')
            .pipe(sass()) // Using gulp-sass
            .pipe(gulp.dest('app/assets/css/'))
            .pipe(browserSync.reload({
                stream: true
            }))
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
            .pipe(useref())
            // Minifies only if it's a JavaScript file
            .pipe(gulpIf('*.js', uglify()))
            .pipe(gulpIf('*.css', cssnano()))
            .pipe(gulp.dest('dist'))
});

gulp.task('copy', function () {

    // Copy images
    gulp.src('app/assets/images/*')
            .pipe(gulp.dest('dist/assets/images'));
    
    gulp.src('app/assets/js/main.js')
            .pipe(gulp.dest('dist/assets/js'));

});


gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/assets/scss/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/assets/js/*.js', browserSync.reload);
});

