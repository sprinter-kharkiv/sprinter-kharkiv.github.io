'use strict';

var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		rigger = require('gulp-rigger'),
		uglify       = require('gulp-uglify'),
		watch = require('gulp-watch');

var task = {};

var path = {
    build: {
    	html: 'app/',
        stylesheets: 'app/css/',
        javascript: 'app/js/'
    },
    src: {
    	html: 'src/*.html',
    	stylesheets: 'src/stylesheets/main.scss',
        javascript: 'src/javascript/**/*.js'
    },
    watch: {
        html: 'src/**/*.html',
        stylesheets: 'src/stylesheets/**/*.scss',
        javascript: 'src/javascript/**/*.js'
    }
};

// HTML
gulp.task('html:build', task.html = function () {
	gulp.src(path.src.html)
    .pipe(rigger())
	  .pipe(gulp.dest(path.build.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Stylesheets
gulp.task('sass:build', function () {
  return gulp.src(path.src.stylesheets)
    .pipe(sass().on('error', sass.logError))
    
    .pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(path.build.stylesheets))
    .pipe(browserSync.reload({
        stream: true
    }));
});

// JAVASCRIPT
gulp.task('javascript:build', task.javascript = function () {
	gulp.src(path.src.javascript)
        .pipe(uglify())
	    .pipe(gulp.dest(path.build.javascript))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Server
gulp.task('server:build', function() {
  	browserSync.init({
    	port : 3200,
    	server: {
      		baseDir: "app"
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
    'server:build',
    'javascript:build'
])

gulp.task('watch', function () {

	watch([path.watch.stylesheets], function (event, cb) {
        gulp.start('sass:build');
    });
    watch([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.javascript], function (event, cb) {
        gulp.start('javascript:build');
    });

});

gulp.task('default', ['build', 'watch']);
