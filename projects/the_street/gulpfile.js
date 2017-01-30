'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var rigger = require('gulp-rigger');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
var	watch = require('gulp-watch');




var path = {
    build: {
    	html: 'build/',
        css: 'build/css/',
        img: 'build/img/',
        javascript: 'build/js/',
        fonts: 'build/fonts/'
    },
    src: {
    	html: 'src/*.html',
        stylus: 'src/stylus/style.styl',
        sass: 'src/sass/style.scss',
        img: 'src/img/**/*.*',
        javascript: 'src/js/**/*.js',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
    	html: 'src/**/*.html',
        stylus: 'src/stylus/**/*.styl',
        sass: 'src/sass/**/*.scss',
        img: 'src/img/**/*.*',
        javascript: 'src/js/**/*.js',
        fonts: 'src/fonts/**/*.*'
    }
};

var task = {};

// HTML
gulp.task('html:build', task.html = function () {
	gulp.src(path.src.html)
    .pipe(rigger())
	.pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

 // SASS
gulp.task('sass:build', function () {
    gulp.src(path.src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Stylus
gulp.task('stylus:build', function () {
    gulp.src(path.src.stylus)
    .pipe(stylus())
    .pipe(gulp.dest(path.build.css))
    .pipe(browserSync.reload({
        stream: true
    }));
});

//Images
gulp.task('img:build', task.img = function () {
	gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.build.img))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// Server
gulp.task('server:build', function() {
  	browserSync.init({
    	port : 3200,
    	server: {
      		baseDir: "build"
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


gulp.task('build', [
    'html:build',
    'sass:build',
    'stylus:build',
    'server:build',
    'img:build'
   // 'fonts:build'
]);

gulp.task('watch', function () {
    watch([path.watch.sass], function (event, cb) {
        gulp.start('sass:build');
    });
    watch([path.watch.stylus], function (event, cb) {
        gulp.start('stylus:build');
    });
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.img], function (event, cb) {
        gulp.start('img:build');
    });
   /* watch([path.watch.fonts], function (event, cb) {
        gulp.start('fonts:build');
    });  */
});

gulp.task('default', ['build', 'watch']);