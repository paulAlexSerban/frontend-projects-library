import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";
import { lintScss } from "./tasks/lintScss";
import { lintHtml } from "./tasks/lintHtml";
import { lintJavaScript } from "./tasks/lintJavaScript";
import { processHtml } from "./tasks/processHtml";
import { compileScssPages } from "./tasks/compileScssPages";
import { compileScssLayers } from "./tasks/compileScssLayers";
import { compileScssComponents } from "./tasks/compileScssComponents";
import { transpileJavaScriptPages } from "./tasks/transpileJavaScriptPages";
// import { minifyCss } from "./tasks/minifyCss";

task("clean", clean);

task("lint:html", lintHtml);
task("lint:styles", lintScss);
task("lint:scripts", lintJavaScript);
task("lint", parallel("lint:html", "lint:styles", "lint:scripts"));

// task("test:scss", testScss);
// task("test:scripts", testsScripts);
// task("test", parallel("test:scss", "test:scripts"));

task(
  "process:html", 
  series(lintHtml, processHtml));
task(
  "compile:styles",
  series(lintScss, compileScssPages, compileScssLayers, compileScssComponents)
);

task(
  "transpile:javascript", 
  series(lintJavaScript, transpileJavaScriptPages));

task(
  "build:assets",
  parallel("process:html", "compile:styles", "transpile:javascript")
);

// task("minify:styles", minifyCss);
// task("minify:javaScript", minifyJavaScript)
// task("minify", parallel("minify:styles", "minify:javaScript"));

task("build", series("clean", "build:assets"));

task("watch:styles", () => {
  watch(paths.src.styles.scssFiles, series("lint:styles", "compile:styles"));
});

task("watch:prototype", () => {
  watch(paths.src.html.htmlFiles, series("process:html"));
  watch(paths.src.styles.scssFiles, series("compile:styles"));
  watch(paths.src.scripts.javaScriptFiles, series("transpile:javascript"));
});
