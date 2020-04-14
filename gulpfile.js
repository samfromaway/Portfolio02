const gulp = require('gulp');

const { src, dest, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

const files = {
  jsPath: 'src/assets/scripts/**/*.js',
};

function imgTask() {
  return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

function jsTask() {
  return src([files.jsPath])
    .pipe(sourcemaps.init())
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/assets/scripts'));
}

exports.default = series(parallel(jsTask, imgTask));
