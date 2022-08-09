import { src, dest, lastRun } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import debug from "gulp-debug";

export const processAssets = () => {
  return (
    src(paths.src.assets.assetFiles)
      .pipe(plumber())
      .pipe(debug({title: 'processAssets : '}))
      .pipe(dest([`${paths.dist.dir}/assets`]))
  );
};