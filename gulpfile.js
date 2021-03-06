var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cp = require('child_process');

/**
 * Compile and minify sass
 */
function styles() {
  return gulp
    .src([ '_sass/*.scss' ])
    .pipe(
      sass({
        includePaths: [ 'scss' ],
        onError: browserSync.notify
      })
    )
    .pipe(prefix([ 'last 3 versions', '> 1%', 'ie 8' ], { cascade: true }))
    .pipe(rename('main.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/css'));
}

function stylesPuzzle() {
    return gulp
        .src([ '_sass/puzzle.css' ])
        .pipe(rename('puzzle.min.css'))
        // .pipe(cssnano())
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/css'));
}

function stylesVendors() {
  return gulp
    .src([ '_sass/vendors/*.css' ])
    .pipe(concat('vendors.min.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(gulp.dest('assets/css'));
}

/**
 * Compile and minify js
 */
function scripts() {
  return gulp
    .src([ '_js/app.js' ])
    .pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/js'));
}

function loginScripts() {
    return gulp
        .src([ '_js/login.js' ])
        .pipe(rename('login.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/js'));
}

function songScripts() {
    return gulp
        .src([ '_js/song.js' ])
        .pipe(rename('song.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/js'));
}

function sharedScripts() {
    return gulp
        .src([ '_js/shared.js' ])
        .pipe(rename('shared.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/js'));
}

function puzzleScripts() {
    return gulp
        .src([ '_js/puzzle.js' ])
        .pipe(rename('puzzle.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/js'));
}

function versesScripts() {
    return gulp
        .src([ '_js/verses.js' ])
        .pipe(rename('verses.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('_site/assets/js'))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest('assets/js'));
}

function scriptsVendors() {
  return gulp
    .src([ '_js/vendors/*.js' ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js'))
    .pipe(gulp.dest('assets/js'));
}

/**
 * Server functionality handled by BrowserSync
 */
function browserSyncServe(done) {
  browserSync.init({
    server: '_site',
    port: 4000
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

/**
 * Build Jekyll site
 */
function jekyll(done) {
  return cp
    .spawn(
      'bundle',
      [
        'exec',
        'jekyll',
        'build',
        '--incremental',
        '--config=_config.yml,_config_dev.yml'
      ],
      {
        stdio: 'inherit'
      }
    )
    .on('close', done);
}

/**
 * Watch source files for changes & recompile
 * Watch html/md files, run Jekyll & reload BrowserSync
 */
function watchData() {
  gulp.watch(
    [ '_data/*.yml', '_config.yml', 'assets/*.json' ],
    gulp.series(jekyll, browserSyncReload)
  );
}

function watchMarkup() {
  gulp.watch(
    [ 'index.html', '_includes/*.html', '_layouts/*.html' ],
    gulp.series(jekyll, browserSyncReload)
  );
}

function watchScripts() {
  gulp.watch([ '_js/*.js' ], scripts);
}

function watchStyles() {
  gulp.watch([ '_sass/*.scss' ], styles);
}

function watch() {
  gulp.parallel(watchData, watchMarkup, watchScripts, watchStyles);
}

var compile = gulp.parallel(
    styles, stylesPuzzle, stylesVendors, scripts, loginScripts, puzzleScripts, versesScripts, songScripts, scriptsVendors, sharedScripts
);
var serve = gulp.series(compile, jekyll, browserSyncServe);
var watch = gulp.parallel(watchData, watchMarkup, watchScripts, watchStyles);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', gulp.parallel(serve, watch));
