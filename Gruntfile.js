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
		handlebars: {
			compile: {
				options: {
					namespace: 'DAT', // Doc App Templates
					processName: function (filePath) {
						return filePath.replace('templates/', '').replace('.handlebars', '');
					},
					partialRegex: /^p-/
				},
				files: {
					"js/hb-partials.js": ["templates/p-category.handlebars", "templates/p-action.handlebars", "templates/p-payload.handlebars", "templates/p-response.handlebars"],
					"js/hb-templates.js": ["templates/category-list.handlebars", "templates/primary-navigation.handlebars"]
				}
			}
		},
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				// the files to concatenate
				src: ['js/libraries/json2.js', 'js/libraries/underscore-min.js', 'js/libraries/backbone-min.js', 'js/libraries/pretty-json-min.js', 'js/hb-helpers.js', 'js/hb-partials.js', 'js/hb-templates.js', 'js/models/category-model.js', 'js/collections/categories-collection.js', 'js/views/navigation-view.js', 'js/views/category-list-view.js', 'js/apps/doc-app.js'],
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
	grunt.loadNpmTasks('grunt-contrib-handlebars');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	// Default task.
	grunt.registerTask('default', ['handlebars', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('logvar', function () {
		grunt.log.writeln(grunt.config.get('logvar').data);
	});

};
