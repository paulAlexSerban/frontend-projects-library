import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { lintScss } from "./tasks/lintScss";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

task("lint", parallel(lintScss));

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

task("watch", () => {
  watch(paths.src.styles.scssFiles, series("lint"));
});
