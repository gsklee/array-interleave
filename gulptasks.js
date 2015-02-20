import Gulp from 'gulp';
import $ from 'gulp-load-plugins';

$ = $();

Gulp.task('build:scripts',
  () => Gulp.src('array-interleave.js')
            .pipe($.rename('array-interleave.min.js'))
            .pipe($.babel({
              loose: 'all',
              experimental: true
            }))
            .pipe($.uglify())
            .pipe(Gulp.dest('.'))
);
