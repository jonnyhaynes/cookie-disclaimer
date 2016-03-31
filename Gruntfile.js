module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'cookieDisclaimer.js']
    },
    uglify: {
      my_target: {
        files: {
          'cookieDisclaimer.min.js': 'cookieDisclaimer.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', 'jshint', 'uglify');

};
