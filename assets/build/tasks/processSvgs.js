import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from 'gulp-size';

export const processSvgs = () => {
  return src(paths.src.assets.svgs)
    .pipe(plumber())
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(`${paths.dist.dir}/svgs`));
};