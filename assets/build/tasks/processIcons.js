import { src, dest } from "gulp";
import { paths } from "../config/paths";
import plumber from "gulp-plumber";
import size from 'gulp-size';

export const processIcons = () => {
  return src(paths.src.assets.icons)
    .pipe(plumber())
    .pipe(size({
      title: 'DEPLOYED : ',
      showFiles: true,
      showTotal: true
    }))
    .pipe(dest(`${paths.dist.dir}/icons`));
};