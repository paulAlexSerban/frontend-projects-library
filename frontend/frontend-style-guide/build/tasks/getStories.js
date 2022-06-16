import { src, dest, lastRun } from "gulp";
import plumber from "gulp-plumber";
import size from "gulp-size";

export const getStories = () => {
  return src(["stories/**/*"], { since: lastRun(getStories) })
    .pipe(plumber())
    .pipe(
      size({
        title: "DEPLOY stories : ",
        showFiles: true,
        showTotal: true,
      })
    )
    .pipe(dest("dist/modules"));
};
