import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { lintScss } from "./tasks/lintScss";

task("lint", parallel(lintScss));

task("watch", () => {
  watch(paths.src.styles.scssFiles, series("lint"));
});
