globs = require './globs'
path  = require('path')

gulp  = require 'gulp'
gutil = require 'gulp-util'
changed = require 'gulp-changed'
watch   = require 'gulp-watch'
plumber = require 'gulp-plumber'
series = require 'stream-series'
filter = require('gulp-filter')
concat = require('gulp-concat')
rename = require('gulp-rename')
gulpif = require('gulp-if')

jade = require 'gulp-jade'
sass = require 'gulp-sass'
coffee = require 'gulp-coffee'

karma = require 'gulp-karma'
sourcemaps = require 'gulp-sourcemaps'

inject = require 'gulp-inject'

es6to5 = require('gulp-es6to5')
babel  = require('gulp-babel')

# Paths
index_path = 'build/index.html'
src_dir    = 'src/'
build_dir  = 'build/'
build_vendor_dir = 'build/vendor/'


gulp.task 'move:es6to5', ->
  return gulp.src globs.es6to5
    .pipe(babel())
    .pipe(gulp.dest('build/app'));


gulp.task 'move:jade', ->
	gulp.src globs.jade
	.pipe plumber()
	.pipe jade({ pretty : true })
	.pipe inject(gulp.src(globs.app, { read : false }), { ignorePath : ['build'], addRootSlash : false })
	.pipe gulp.dest(build_dir)


#gulp.task 'move:jade-derectives', ->
	#gulp.src globs.jade
	#.pipe plumber()
	#.pipe jade({ pretty : true })
	#.pipe inject(gulp.src(globs.app, { read : false }), { ignorePath : ['build'], addRootSlash : false })
	#.pipe gulp.dest(build_dir)


gulp.task 'move:sass', ->
  gulp.src globs.sass
    .pipe plumber()
    .pipe(concat('main.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(rename (path)->
      path.dirname = '/style'
      path
    )
    .pipe gulp.dest(build_dir)

gulp.task 'move:coffee', ->
	gulp.src globs.coffee
	.pipe plumber()
	.pipe coffee({ bare : true })
	.pipe gulp.dest(build_dir)


gulp.task 'move:vendor', ->
	gulp.src globs.vendor
	.pipe plumber()
	.pipe gulp.dest(build_vendor_dir)


gulp.task 'run:karma', ->
	gulp.src globs.karma
	.pipe karma
		configFile : 'karma.conf.js'
		action : 'watch'
	.on 'error', (err) ->
		throw err
		return


gulp.task 'watch', ->
	gulp.watch globs.vendor, ['move:vendor']
	gulp.watch globs.es6to5, ['move:es6to5']
	gulp.watch globs.jade, ['move:jade']
	gulp.watch globs.sass, ['move:sass']
	gulp.watch globs.coffee, ['move:coffee']
	gulp.watch globs.karma, ['run:karma']
	

gulp.task 'watch-simple', ->
	gulp.watch globs.es6to5, ['move:es6to5']
	gulp.watch globs.jade, ['move:jade']
	gulp.watch globs.sass, ['move:sass']


gulp.task 'move:files', ['move:vendor', 'move:sass', 'move:coffee', 'move:es6to5'], ->
	gulp.start 'move:jade'

gulp.task 'default', ['move:files', 'watch']

`
/** *****************************************
 *
 * Internal helper functions
 *
 ** ***************************************** */


function readModuleArg() {
  var module = argv.c ? 'material.components.' + argv.c : (argv.module || argv.m);
  if (!module) {
    gutil.log('\nProvide a compnent argument via \`-c\`:',
      '\nExample: -c toast');
    gutil.log('\nOr provide a module argument via \`--module\` or \`-m\`.',
      '\nExample: --module=material.components.toast or -m material.components.dialog');
    process.exit(1);
  }
  return module;
}
`

