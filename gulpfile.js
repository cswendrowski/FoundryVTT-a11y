const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const minify = require('gulp-minify');
const path = require('path');
const babel = require('gulp-babel');
 
/* ----------------------------------------- */
/*  Compile Sass
/* ----------------------------------------- */

// Small error handler helper function.
function handleError(err) {
    console.log(err.toString());
    this.emit('end');
  }
  
const SCSS_FILES = ["styles/**/*.scss"];

scss = () => gulp.src(SCSS_FILES)
    .pipe(sourcemaps.init())
    .pipe(
        sass({
            outputStyle: 'nested'
        })
        .on('error', handleError)
    )
    .pipe(sourcemaps.write('.'))
    // .pipe(prefix({
    //     cascade: false
    // }))
    .pipe(gulp.dest("./css"));

watch = () => { 
    gulp.watch(SCSS_FILES, scss);
}


gulp.task('watch', watch);
gulp.task('build', gulp.series(scss));
gulp.task('default', gulp.series(scss, watch));
