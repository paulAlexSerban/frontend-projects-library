import { src, dest, lastRun } from "gulp";
import plumber from "gulp-plumber";
import size from "gulp-size";

export const getLSG = () => {
  return src(["../living-style-guide/source/**/*"], { since: lastRun(getLSG) })
    .pipe(plumber())
    .pipe(
      size({
        title: "DEPLOY LSG : ",
        showFiles: true,
        showTotal: true,
      })
    )
    .pipe(dest("dist"));
};
