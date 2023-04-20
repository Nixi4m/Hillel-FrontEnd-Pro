const del = require('del');
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require("sass"));
const less = require("gulp-less");
const cleanCSS = require("gulp-clean-css");

gulp.task("scripts", function () {
  return gulp.src("src/js/**/*.js")
    .pipe(concat("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("scss", function () {
  return gulp.src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(concat("all.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("less", function () {
  return gulp.src("src/less/**/*.less")
    .pipe(less())
    .pipe(concat("all.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function () {
  gulp.watch("src/js/**/*.js", gulp.series("scripts"));
  gulp.watch("src/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("src/less/**/*.less", gulp.series("less"));
});

gulp.task("clean", function () {
  return del(["dist"]);
});

gulp.task("default", gulp.series("clean", gulp.parallel("scripts", "scss", "less"), "watch"));
