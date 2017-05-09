var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    htmlreplace = require('gulp-html-replace'),
    replace = require('gulp-replace'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    svgo = require('gulp-svgo'),
    browserSync = require('browser-sync').create();

// TODO: ENVIRONMENT REPLACEMENT IN BASE.HTML.TWIG

var config = {
    scripts: {
        src: [
            'js/*.js'
        ],
        destDev: 'dist/js/js-compiled',
        destBuild: 'dist/js/js-min'
    },

    images: {
        srcOne: 'images/**/*',
        destOne: 'images',
        srcTwo: '../../pages/**/*',
        destTwo: '../../pages'
    },

    sass: {
        src: 'styles/scss/**/*.scss',
        dest: 'dist/styles/css-compiled'
    },

    css: {
        src: 'dist/styles/css-compiled/styles.css',
        dest: 'dist/styles/css-min'
    },

    templates: {
        src: './templates/**/*.twig'
    },

    baseTemplate: {
        src: './templates/partials/base.html.twig',
        dest: './templates/partials/'
    },

    content: {
        src: '../../pages/**/*.md'
    }
};

gulp.task('minify-css', function() {
	return gulp.src(config.css.src)
    	.pipe(cleanCSS({debug: true}, function(details) {
    		console.log(details.name + ': ' + details.stats.originalSize);
    		console.log(details.name + ': ' + details.stats.minifiedSize);
    	}))
        .pipe(rename('styles.min.css'))
    	.pipe(gulp.dest(config.css.dest))
        .pipe(browserSync.stream());
});

gulp.task('sassCompileDev', function() {
	return gulp.src(config.sass.src)
        .pipe(sourcemaps.init())
    	.pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
    	.pipe(gulp.dest(config.sass.dest))
    	.pipe(browserSync.stream());
});

gulp.task('sassCompileBuild', function() {
	return gulp.src(config.sass.src)
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest(config.sass.dest))
});

gulp.task('sassBuild', function (callback) {
	runSequence('sassCompileBuild', 'minify-css', callback)
});

gulp.task('sass:watch', function () {
	gulp.watch(config.sass.src, ['sass']);
});

gulp.task('scriptsDev', function() {
    return gulp.src(config.scripts.src)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.scripts.destDev))
        .pipe(browserSync.stream());
});

gulp.task('scriptsBuild', function() {
    return gulp.src(config.scripts.src)
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(config.scripts.destBuild))
});

gulp.task('image-minOne', function() {
    gulp.src(config.images.srcOne)
       .pipe(imagemin())
       .pipe(svgo())
       .pipe(gulp.dest(config.images.destOne));
});

gulp.task('image-minTwo', function() {
    gulp.src(config.images.srcTwo)
       .pipe(imagemin())
       .pipe(svgo())
       .pipe(gulp.dest(config.images.destTwo));
});

// Injects dev css (unminified) for quicker compile times
gulp.task('envDev', function() {
    gulp.src(config.baseTemplate.src)
    .pipe(htmlreplace({
        'css': {
            src: "{% do assets.addCss('theme://dist/styles/css-compiled/styles.css') %}",
            tpl: '<!-- build:css -->%s<!-- endbuild -->'
        },
        'js': {
            src: "{% do assets.addJs('theme://dist/js/js-compiled/scripts.js', {'priority': 101, 'group':'footer'}) %}",
            tpl: '<!-- build:js -->%s<!-- endbuild -->'
        }
    }))
    .pipe(gulp.dest(config.baseTemplate.dest));
});

// Injects prod css minified
gulp.task('envBuild', function() {
    gulp.src(config.baseTemplate.src)
    .pipe(htmlreplace({
        'css': {
            src: "{% do assets.addCss('theme://dist/styles/css-min/styles.min.css') %}",
            tpl: '<!-- build:css -->%s<!-- endbuild -->'
        },
        'js': {
            src: "{% do assets.addJs('theme://dist/js/js-min/scripts.min.js', {'priority': 101, 'group':'footer'}) %}",
            tpl: '<!-- build:js -->%s<!-- endbuild -->'
        }
    }))
    .pipe(gulp.dest(config.baseTemplate.dest));
});

gulp.task('dev', function(callback) {
    runSequence('envDev', 'sassCompileDev', 'scriptsDev', callback)

    browserSync.init({
		proxy: "http://scoutscamp.dev:8888/"
	})

    gulp.watch(config.scripts.src, ['scriptsDev'])
    gulp.watch(config.sass.src, ['sassCompileDev'])
	gulp.watch(config.content.src).on('change', browserSync.reload)
	gulp.watch(config.templates.src).on('change', browserSync.reload);
});

gulp.task('build', function(callback) {
    runSequence('envBuild', 'sassBuild', 'scriptsBuild', 'image-minOne', 'image-minTwo', callback)
});
