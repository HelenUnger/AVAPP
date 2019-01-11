// import all of the required plugins / packages
var gulp = require('gulp');
var sass = require('gulp-sass');

// compile SASS
gulp.task('sass', function() {
    //define the gulp-sass task
    return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle : "compressed"}).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
});

// watch SASS files for changes, compile
gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
