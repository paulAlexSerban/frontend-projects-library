import { src, dest, lastRun } from "gulp";
import plumber from "gulp-plumber";
import size from "gulp-size";

export const getCmpLib = () => {
  return src(["../js-component-library/source/**/*"], { since: lastRun(getCmpLib) })
    .pipe(plumber())
    .pipe(
      size({
        title: "DEPLOY cmp-lib : ",
        showFiles: true,
        showTotal: true,
      })
    )
    .pipe(dest("dist"));
};
