/**
 * Gulp modules for our tasks.
 */
const gulp = require('gulp');
const server = require('gulp-webserver');

/**
 * Serve our dist directory to localhost:3000 and turn live reload on.
 */
gulp.task('serve', function () {
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
            fallback: 'index.html',
            host: "0.0.0.0",
            port: 3000
        }));
});

/**
 * Run our gulp serve task.
 */
gulp.task('default', ['serve']);
