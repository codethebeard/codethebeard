module.exports = function(grunt) {

    // Automatically load grunt tasks and dependancies. ML 2014-12-04: https://github.com/sindresorhus/load-grunt-tasks
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    // 1. All configuration goes here
    grunt.initConfig({

      /*************** LOCATIONS & VARIABLES ***************/

      // Default Directories
      locations:{
        images: 'img/',
        scss: 'sass/',
        css: 'css/',
        js: 'js/',
        themeRoot: './',
        local: '<%= pkg.deployment.local %>',
        staging: '<%= pkg.deployment.staging %>',
        live: '<%= pkg.deployment.live %>'
      },

      // CSS Banner
      pkg: grunt.file.readJSON('package.json'),
      cssBanner:{
        banner:
            '__________________________________________\n'+
            '|..................,=....................|\n'+
            '|..................===...................|\n'+
            '|.................=====..................|\n'+
            '|................=======.................|\n'+
            '|................=======.................|\n'+
            '|...............=========................|\n'+
            '|...............=========................|\n'+
            '|...............777777777................|\n'+
            '|...............777777777................|\n'+
            '|...............777777777................|\n'+
            '|...............777777777................|\n'+
            '|...............77777777I................|\n'+
            '|.............===7777777===..............|\n'+
            '|............====7777777====.............|\n'+
            '|...........======I7777======............|\n'+
            '|...........======77777======............|\n'+
            '|...........======7777I======............|\n'+
            '|...........=====.......=====............|\n'+
            '|...........===..........===.............|\n'+
            '|............~............~..............|\n'+
            '|............*RocketNoises*..............|\n'+
            '|........................................|\n'+
            '------------------------------------------\n'+
            '\n'+
            'Team: Michael Large \n'+
            'Website: http://codethebeard.com \n'+
            'Github: @codethebeard \n'+
            'Twitter: @codethebeard \n'+
            'License: <%= pkg.license %> \n'+
            'Version: <%= pkg.version %> \n'+
            'Last Updated: <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %>\n'+
            '\n',
      },

      /*************** CSS & SASS GENERATION ***************/
      sass: {
        dist: {
          options: {
              style: 'compressed',
              compass: true,
              sourcemap: 'file'
          },
          files: {
            '<%= locations.css %>main.css': '<%= locations.scss %>main.scss'
          }
        },
        banner: { //creates humans txt file. **Hacky way of doing this.
          options: {
             banner: '<%= cssBanner.banner %>',
             sourcemap: 'none'
          },
          files: {
            '<%= locations.themeRoot %>humans.txt':'<%= locations.scss %>banner.scss'
          }
        }
      },
      autoprefixer: {
        options: {
          browsers: ['last 2 versions'] // more codenames at https://github.com/ai/autoprefixer#browsers
        },
        dist: {
          files: '<%= locations.css %>**/*.css'
        }
      },

      /*************** JAVASCRIPT ***************/

      uglify: {
        options: {
          mangle: {
            except: ['jQuery', 'Backbone']
          }
        },
        dist: {
          files: {
            '<%= locations.js %>scripts.min.js': ['<%= locations.js %>scripts.js']
          }
        }
      },
      jshint: {
        all: ['Gruntfile.js', '<%= locations.js %>scripts.js']
      },

      /*************** IMAGES ***************/

      // Put All Image Files in the to_min directory, then run 'grunt imagemin'
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            optimizationLevel: 3, //default 3
            cwd: '<%= locations.images %>to_min/',
            src: ['**/*.{png,jpg,gif}'],
            dest: '<%= locations.images %>'
          }]
        }
      },

      /*************** UTILITIES ***************/
      watch: {
        css: {
          files: '<%= locations.scss %>**/*.scss',
          tasks: ['sass','autoprefixer','jekyll:dev']
        },
        php: {
          files: ['**/*.html','**/*.md', '**/*.markdown','!_site/**/*.html','!_site/**/*.md],
          tasks: ['jekyll:dev']
        },
        js: {
        	files: ['<%= locations.js %>','!_site/**/*.js'],
        	tasks: ['jshint','uglify','jekyll']
        }
      },

      browserSync: {
          dev: {
              bsFiles: {
                  src: ['<%= locations.css %>style.css', '<%= locations.themeRoot %>**/*.php','<%= locations.themeRoot %>**/*.html','<%= locations.js %>**/*.js' ]
              },
              options: {
                  proxy: "<%= pkg.deployment.local %>",
                  watchTask: true, // < VERY important
              }
          }
      },

		jekyll: {                             // Task
			options: {                          // Universal options
			},
			dist: {                             // Target
				options: {                        // Target options
					config: '_config.yml'
				}
			},
			dev: {
				options: {
					config: ['_config.yml','_config-dev.yml']
				}
			}
		},

      devUpdate: { //updates dependancies and tasks.
        main: {
          options: {
            updateType: 'force', //FORCE UPDATE THE PACKAGES
            reportUpdated: false, //don't report up-to-date packages
            semver: true, //stay within semver when updating
            packages: {
                devDependencies: true, //only check for devDependencies
                dependencies: true
            },
            packageJson: null, //use matchdep default findup to locate package.json
            reportOnlyPkgs: [] //use updateType action on all packages
          }
        }
      }

    }); // END GRUNT INIT

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['deploy']);
    grunt.registerTask('deploy', ['sass','autoprefixer','jshint','uglify','jekyll:dev','watch']);
};
