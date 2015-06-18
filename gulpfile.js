var gulp = require('gulp');

var paths = {
    configMaster: './config.yaml',
    configOwn: '../customconfig.yaml',
    output: '../beetsdir'
};

gulp.task('default', ['build']);

gulp.task('watch', function(){
    gulp.watch(paths.configMaster, ['build']);
});

gulp.task('build', function() {
    var YAML = require('yamljs');
    var replace = require('gulp-replace');
    var configOwnObject = YAML.load(paths.configOwn);

    return gulp.src(paths.configMaster)
        .pipe(replace(/#.*@.*@/g, function(match){
            var output = match;
            var tempSplit = match.split('@', 2);
            var cleanMatch = tempSplit[1] //.replace(/@/g, '');
            var yamlValue = tempSplit[0].replace('#','');
            if(configOwnObject.hasOwnProperty(cleanMatch)){
                output = yamlValue + configOwnObject[cleanMatch];
            }
            return output;
        }))
        .pipe(gulp.dest(paths.output));
});