module.exports = function(grunt) {
  grunt.initConfig({
    exec: {
        build: {
            cmd: 'node node_modules/requirejs/bin/r.js -o app/js/app.build.js'
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-exec');
  grunt.registerTask('build', ['exec:build']);
};

