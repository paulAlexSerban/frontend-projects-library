import { task, series, watch } from "gulp";
import { paths } from "./config/paths";
import { lintJavaScript } from "./tasks/lintJavaScript";

task("lint", lintJavaScript);

task("watch", () => {
  watch(paths.src.scripts.javaScriptFiles, series("lint"));
});
