import { task, series, watch } from "gulp";
import { paths } from "./config/paths";
import { lintJavaScript } from "./tasks/lintJavaScript";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

task("lint", lintJavaScript);

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

task("watch", () => {
  watch(paths.src.scripts.javaScriptFiles, series("lint"));
});
