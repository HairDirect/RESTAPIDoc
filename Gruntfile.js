/*global module:false*/
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		logvar: {
			data: '<%= pkg.name %>'
		},
		banner: '',
		// Task configuration.
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				// the files to concatenate
				src: ['js/libraries/underscore-min.js', 'js/libraries/backbone-min.js', 'js/libraries/pretty-json-min.js', 'js/hb-helpers.js', 'js/hb-partials.js', 'js/hb-templates.js', 'js/models/category-model.js', 'js/collections/categories-collection.js', 'js/views/navigation-view.js', 'js/views/category-list-view.js', 'js/apps/doc-app.js'],
				// the location of the resulting JS file
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/style.mins.css': ['css/style.css']
				}
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Default task.
	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
	grunt.registerTask('logvar', function () {
		grunt.log.writeln(grunt.config.get('logvar').data);
	});

};
