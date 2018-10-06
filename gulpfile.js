const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("hello", () => {
  console.log("jus suckin down dem burgers");
});

gulp.task("sass", () => {
  return gulp
    .src("src/react-scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("src/react-scss/react-css"));
});

gulp.task("watch", () => {
  gulp.watch("src/**/*.scss", ["sass"]);
});
