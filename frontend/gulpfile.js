var gulp = require('gulp')
var concat = require('gulp-concat')
var rollup = require('gulp-rollup')
var pug = require('gulp-pug')
var plumber = require('gulp-plumber')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var cssmin = require('gulp-cssmin')
var stylus = require('gulp-stylus')
var autoprefixer = require('gulp-autoprefixer')
var browserSync=require('browser-sync')
var babel = require('rollup-plugin-babel')
var npm = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs')
var replace = require('rollup-plugin-replace')
var vue = require('rollup-plugin-vue')

var paths = {
    dev: {
        pug: 'src/pug/**/*.pug',
        js: 'src/js/index.js',
        store: 'src/store/**',
        vue: 'src/vue/**',
        resource: 'src/resource/**',
        stylus: 'src/stylus/**'
    },
    dist: {
        template:'dist',
        resource:'dist/resource'
    }
}

gulp.task('resource', function () {
    return gulp.src(paths.dev.resource)
        .pipe(gulp.dest(paths.dist.resource))
})

gulp.task('browser-sync', function () {
    browserSync({
        server:{
            baseDir:'./dist/',
            // index: '/html/index.html'
        }
    })
    gulp.watch(paths.dev.pug, ['pug'])
    gulp.watch(paths.dev.resource, ['resource'])
    gulp.watch([paths.dev.js, paths.dev.store, paths.dev.vue], ['rollup'])
    gulp.watch(['dist/**'],['reload'])
})

gulp.task('reload' , function () {
    return browserSync.reload()
})

gulp.task('stylus', function () {
    return gulp.src(paths.dev.stylus)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer())
      .pipe(cssmin())
      .pipe(concat('all.min.css'))
      .pipe(gulp.dest(paths.dist.template))
      .pipe(browserSync.stream())
})

gulp.task('pug', function () {
    return gulp.src(paths.dev.pug)
        .pipe(plumber())
        .pipe(pug())
        .pipe(gulp.dest(paths.dist.template))
})

gulp.task('rollup', function () {
    return gulp.src([paths.dev.js])
        .pipe(plumber())
        .pipe(rollup({
            format: 'umd',
            plugins: [
                vue(),
                babel({presets: ['es2015-rollup']}),
                npm({
                    jsnext: true,
                    main: true
                }),
                commonjs({
                    include: 'node_modules/**'
                }),
                replace({
                    'process.env.NODE_ENV': "'production'"
                })
            ]
        }))
    .pipe(uglify())
    .pipe(rename('all.min.js'))
    .pipe(gulp.dest(paths.dist.template))
})

gulp.task('default',['browser-sync', 'rollup', 'pug', 'stylus', 'resource'])
