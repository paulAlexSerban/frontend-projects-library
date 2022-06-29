import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { clean } from "./tasks/clean";

import { lintHtml } from "./tasks/lintHtml";
import { processHtml } from "./tasks/processHtml";
import { processAssets } from "./tasks/processAssets";
import { processMetaFiles } from "./tasks/processMetaFiles";

import { compileScssPages } from "./tasks/compileScssPages";
// import { compileScssLayers } from "./tasks/compileScssLayers";
// import { compileScssComponents } from "./tasks/compileScssComponents";

import { transpileJavaScriptPages } from "./tasks/transpileJavaScriptPages";
// import { minifyCss } from "./tasks/minifyCss";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------

task("clean", clean);
task("lint:html", lintHtml);
task("lint", parallel("lint:html"));
// task("test:scss", testScss);
// task("test:scripts", testsScripts);
// task("test", parallel("test:scss", "test:scripts"));
task("process:assets", series(processAssets));
task("process:html", series(lintHtml, processHtml, processMetaFiles));
task("compile:styles", series(compileScssPages));
task("transpile:javascript", series(transpileJavaScriptPages));
// task("minify:styles", minifyCss);
// task("minify:javaScript", minifyJavaScript)
// task("minify", parallel("minify:styles", "minify:javaScript"));

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

task("build", series("clean", parallel("process:assets", "process:html", "compile:styles", "transpile:javascript")));

task("watch", () => {
  watch(paths.src.html.htmlFiles, series("process:html"));
  watch(paths.src.styles.scssFiles, series("compile:styles"));
  watch(paths.src.scripts.javaScriptFiles, series("transpile:javascript"));
});
