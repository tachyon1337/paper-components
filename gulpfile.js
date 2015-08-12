
var gulp=require('gulp');

gulp.task('default',function(){
    console.log('echo paper components');
});

gulp.task('build',function(){
    copyScripts();
});

function copyScripts(){
    gulp.src('./lib/**/*.*')
        .pipe(gulp.dest('./dist/paper/'));
}