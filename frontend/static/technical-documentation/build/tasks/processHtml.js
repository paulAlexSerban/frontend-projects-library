import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";

export const processHtml = () => {
  return (
    src(paths.src.html.htmlFiles, { since: lastRun(processHtml) })
      .pipe(plumber())
      .pipe(debug({title: 'processHtml : '}))
      .pipe(dest([`${paths.dist.dir}`]))
  );
};