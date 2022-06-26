import { src, dest } from "gulp";
import minifyCSS from "gulp-clean-css";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import debug from "gulp-debug";
import { red, green } from "ansi-colors";


export const minifyCss = () => {
  return src([`./dist/.tmp/*.css`])
    .pipe(plumber())
    .pipe(debug({ title: "minifyCss :" }))
    .pipe(
      minifyCSS(
        {
          debug: true,
        },
        (details) => {
          const originalSize = (details.stats.originalSize / 1024).toFixed(2);
          const minifiedSize = (details.stats.minifiedSize / 1024).toFixed(2);
          console.log(
            `-------------> ${originalSize} Kb to ${minifiedSize} Kb`
          );
        }
      )
    )
    .pipe(
      rename((file) => {
        file.basename = `${file.basename}.min`;
      })
    )
    .pipe(dest(`./dist`));
};
