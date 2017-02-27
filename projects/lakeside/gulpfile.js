var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
/*
gulp.task('browser-sync', ['styles', 'scripts'], function () {
    browserSync.init({
        proxy: "lakeside/",
        notify: false
    });
});

*/
// Server
gulp.task('browser-sync',['styles', 'scripts'], function() {
    browserSync.init({
        port : 3200,
        server: {
            baseDir: "./"
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: '0'
            }
        },
        open: true
    });
});


gulp.task('styles', function () {
    return gulp.src('sass/*.sass')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
    return gulp.src([
            './libs/modernizr/modernizr.js',
            './libs/jquery/jquery-1.11.2.min.js',
            './libs/waypoints/waypoints.min.js',
            './libs/animate/animate-css.js'
        ])
        .pipe(concat('libs.js'))
        // .pipe(uglify()) //Minify libs.js
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch', function () {
    gulp.watch('sass/*.sass', ['styles']);
    gulp.watch('libs/**/*.js', ['scripts']);
    gulp.watch('js/*.js').on("change", browserSync.reload);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
