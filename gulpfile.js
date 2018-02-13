const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("hello", () => {
  console.log("jus suckin down dem burgers");
});

gulp.task("sass", () => {
  return gulp
    .src("react-app/src/react-scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("react-app/src/react-scss/react-css"));
});

gulp.task("watch", () => {
  gulp.watch("react-app/**/*.scss", ["sass"]);
});
