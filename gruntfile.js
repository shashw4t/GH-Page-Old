module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  uglify: {
		build: {
		babel: {
		  options: {
			sourceMap: true,
			presets: ['@babel/preset-env', '@babel/preset-react']
		  },
		  dist: {
			files: [{
			  expand: true,
			  cwd: 'src/',
			  src: ['**/*.js'],
			  dest: 'build/',
			  ext: '.js'
			}]
		  }
		},
		  dest: 'build/shashw4t.github.io.min.js'
		}
	  },
	  copy: {
		main: {
		  files: [
			// Copy all files from src to build directory
			{expand: true, cwd: 'src/', src: ['**'], dest: 'build/'}
		  ]
		}
	  }
	});
  
	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
  
	// Default task(s).
	grunt.registerTask('default', ['uglify', 'copy']);
  };