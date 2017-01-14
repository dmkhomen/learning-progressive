var gulp = require('gulp'),
gutil = require('gulp-util'),
browserSync = require('browser-sync').create(),
browserify = require('gulp-browserify'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
gulpif = require('gulp-if'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
imagemin = require('gulp-imagemin'),
pngcrush = require('imagemin-pngcrush'),
jsonminify = require('gulp-jsonminify'),
minifyHTML = require('gulp-minify-html'),
path = require('path'),
swPrecache = require('sw-precache');

var src = './src',
dist = './dist',
enviroment = 'production';

var proxy = 'localhost/learning-progressive/dist';

// var jsSources = src + '/js/*.js',
//     cssSources = src + '/css/*.css',
//     dataSources = src + '/json',
//     htmlSources = src + '/',

//TODO init browsersync here
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: proxy
    });
});

gulp.task('generate-service-worker', function(callback){
    swPrecache.write('./dist/service-worker.js', {
        staticFileGlobs: [ './dist/**/*.{js,html,json,css,png,jpg,gif,svg,eot,ttf,woff}' ],
        stripPrefix: 'dist/'
    }, callback)
});

gulp.task('js',function(){
    gulp.src(src + '/js/app.js')
    .pipe(concat('app.js'))
    .pipe(browserify())
    .pipe(uglify())
    .pipe(gulp.dest(dist + '/js/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('css',function(){
    return gulp.src(src + '/css/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(dist + '/css/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('json',function(){
    gulp.src(src + '/data/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest(dist + '/data/'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('html',function(){
    gulp.src(src + '/*.php')
    .pipe(minifyHTML())
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('images',function(){
    gulp.src(src + '/images/**/*.*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewbox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest(dist + '/images'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch', function(){
    gulp.watch(src + '/js/*.js', ['generate-service-worker','js']);
    gulp.watch(src + '/css/*.scss', ['generate-service-worker','css']);
    gulp.watch(src + '/data/*.json', ['generate-service-worker','json']);
    gulp.watch(src + '/*.php', ['generate-service-worker','html']);
    gulp.watch(src + '/images/**/*.*', ['images']);
});

gulp.task('default', ['js', 'css', 'json', 'html', 'images', 'generate-service-worker', 'browser-sync', 'watch']);
