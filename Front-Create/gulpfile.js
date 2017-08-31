var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
    gulp.src(['./assets/sass/*.scss'])
        .pipe(sass({
            importer: require('npm-sass').importer
        }))
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['sass']);
