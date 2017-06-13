// Gruntfile.js

module.exports = function (grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // Configure sass
    sass: {
      dist: {
        files: {
          'css/style.css': 'sass/screen.scss'
        }
      }
    },
    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'css/style.min.css': 'css/style.css'
        }
      }
    },
    // configure watch to auto update ----------------
    watch: {

      // for stylesheets, watch css and less files
      // only run less and cssmin stylesheets: {
      files: ['sass/**/*.scss'],
      tasks: ['sass', 'cssmin']
    }



  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'cssmin']);
};
