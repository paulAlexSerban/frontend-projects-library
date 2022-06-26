import { src, dest } from "gulp";
import { paths } from "../config/paths";
import dartSass from "dart-sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import debug from "gulp-debug";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import stripCssComments from "gulp-strip-css-comments";
import sassInheritance from "gulp-sass-multi-inheritance";
import changed from "gulp-changed";
import prettier from 'gulp-prettier';

const sass = gulpSass(dartSass);
const plugins = [autoprefixer()];

export const compileScssLayers = () => {
  return (
    src(paths.src.styles.scssLayers)
      .pipe(changed(paths.dist.dir))
      .pipe(sassInheritance({ dir: paths.src.styles.scssDir }))
      .pipe(plumber())
      .pipe(sass.sync().on("error", sass.logError))
      .pipe(postcss(plugins))
      .pipe(
        rename((file) => {
          file.dirname = `css/layers`;
        })
      )
      .pipe(debug({ title: "compileScssLayers : " }))
      .pipe(stripCssComments())
      .pipe(prettier())
      .pipe(dest(paths.dist.dir))
  );
};
