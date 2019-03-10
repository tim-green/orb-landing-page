module.exports = function(grunt){
    
    grunt.initConfig({
      concat: {
        js: {
          src: ['assets/js/jquery.min.js', 'assets/js/bootstrap.min.js', 'assets/js/wow.min.js', 'assets/js/plugins.js', 'assets/js/typed.min.js','assets/js/site.js'],
          dest: 'build/js/scripts.js',  
        },
        css: {
          src: ['assets/css/fonts.css', 'assets/css/bootstrap.min.css','assets/css/styles.css', 'assets/css/responsive.css','assets/css/owl.carousel.min.css','assets/css/loaders.min.css'],
          dest: 'build/css/styles.css',
        },
      },
      watch: {
      js: {
        files: ['assets/js/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['assets/css/*.css'],
        tasks: ['concat'],
      },
    },
  
  copy: {
    main: {
    files: [
          {
            expand: true, 
            src: ['assets/images/**'], 
            dest: 'build/'
          },
          {
            expand: true,
            src: ['assets/fonts/**'], 
            dest: 'build/'
          },
        ],
      },
    },

//above this    
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default',['concat','watch','copy']);
}