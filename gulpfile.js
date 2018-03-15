const gulp = require('gulp');
const mustache = require('gulp-mustache');
const del = require('del');
const browserSync = require('browser-sync');

const paths = {
  htmlSrc: 'src/index.html',
  mdSrc: 'src/presentation.md',
  cssSrc: 'src/assets/css/stylesheet.css',
  varsSrc: 'src/vars.json',
  assetsDir: 'src/assets',
  jsDir: 'src/assets/js',
  imgDir: 'src/assets/img',
  distDir: 'dist',
}

gulp.task('compileHtml', () => {
  return gulp.src(paths.htmlSrc)
    .pipe(mustache(paths.varsSrc))
    .pipe(gulp.dest(paths.distDir));
});

gulp.task('compileCss', () => {
  return gulp.src(paths.cssSrc)
    .pipe(gulp.dest(paths.distDir + '/assets/css'));
});

gulp.task('copyImg', () => {
    return gulp.src(paths.imgDir + '/**/*', {base: paths.assetsDir})
      .pipe(gulp.dest(paths.distDir + '/assets'));
});

gulp.task('copyJs', () => {
    return gulp.src(paths.jsDir + '/**/*', {base: paths.assetsDir})
      .pipe(gulp.dest(paths.distDir + '/assets'));
});

gulp.task('copyAssets',['copyImg', 'copyJs']);

gulp.task('build',['compileHtml', 'compileCss', 'copyAssets']);

gulp.task('md-watch',['build'], done => {
    browserSync.reload();
    done();
});

gulp.task('html-watch',['build'], done => {
    browserSync.reload();
    done();
});

gulp.task('css-watch', ['compileCss'], done => {
    browserSync.reload();
    done();
});

gulp.task('watch',['build'], () => {
    browserSync.init({
      server: {
        baseDir: paths.distDir
      }
    });

    gulp.watch(paths.mdSrc, ['md-watch']);
    gulp.watch(paths.htmlSrc, ['html-watch']);
    gulp.watch(paths.cssSrc, ['css-watch']);
});
