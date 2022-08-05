"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass');
const changed = require('gulp-changed');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const del = require('del');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const cached = require('gulp-cached');
const browsersync = require('browser-sync').create();

sass.compiler = require("node-sass");

//BrowserSync
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function browserSync(done) {
    browsersync.init({
        files: "./*.html",
        startPath: "",
        server: {
            baseDir: "./src/",
            routes: {},
            middleware: function (req, res, next) {
                if (/\.json|\.txt|\.html/.test(req.url) && req.method.toUpperCase() == 'POST') {
                    console.log('[POST => GET] : ' + req.url);
                    req.method = 'GET';
                }
                next();
            }
        }
    });
    done();
}

//SASS
function scss() {
    return gulp
        .src('./src/assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('./src/assets/css/'))
        .on('error', sass.logError)
        .pipe(autoprefixer([
            "last 1 major version",
            ">= 1%",
            "Chrome >= 45",
            "Firefox >= 38",
            "Edge >= 12",
            "Explorer >= 10",
            "iOS >= 9",
            "Safari >= 9",
            "Android >= 4.4",
            "Opera >= 30"
        ], {
            cascade: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src/assets/css/'))
        .pipe(browsersync.stream());
}

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

// Dists
function distClean() {
    return del('dist/**/');
}

function minCSS() {
    return gulp
        .src([
            './src/assets/css/style.css',
        ])
        .pipe(cleanCSS({
            compatibility: 'ie11'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/assets/css/'));
}

function minJS() {
    return gulp
        .src('/src/assets/js/**/*.js')
        .pipe(concat('styles.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/assets/js/'));
}

function copyVendors() {
    return gulp
        .src([
            './src/assets/vendor/**/*.*',
        ])
        .pipe(gulp.dest('./dist/assets/vendor/'))
};

function copyImg() {
    return gulp
        .src([
            './src/assets/img/*.*',
        ])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/img/'));
};

function copyFonts() {
    return gulp
        .src([
            './src/assets/fonts/*.*',
        ])
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/fonts/'));
};

function copyHtml() {
    return gulp
        .src([
            './src/**/*.html',
            '!node_modules/**',
            '!dist/**',
        ])
        .pipe(gulp.dest('./dist/'));
};

//Watch
function watch() {
    gulp.watch('./src/assets/scss/**/*.scss', scss);
    gulp.watch(
        [
            './**/*.html'
        ],
        gulp.series(browserSyncReload)
    );
}

//Task Executable
gulp.task('default', gulp.parallel(watch, scss, browserSync));
gulp.task('distClean', distClean);
gulp.task('minCSS', minCSS);
gulp.task('minJS', minJS);
gulp.task('copyVendors', copyVendors);
gulp.task('copyImg', copyImg);
gulp.task('copyFonts', copyFonts);
gulp.task('copyHtml', copyHtml);
gulp.task('dist', gulp.series(distClean, copyVendors, copyHtml, copyImg, copyFonts, minCSS, minJS));