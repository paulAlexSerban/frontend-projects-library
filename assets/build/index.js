import { task, parallel, series} from "gulp";
import { clean } from "./tasks/clean";
import { processIcons } from "./tasks/processIcons";
import { processSvgs } from "./tasks/processSvgs";
import { createImageRenditions } from "./tasks/createImageRenditions";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------
task("clean", clean);
task("process:icons",  processIcons);
task("process:svgs", processSvgs),
task("images:createRenditions", createImageRenditions);

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
task(
  "build",
  series("clean", parallel( "process:icons", "process:svgs", "images:createRenditions"))
  
);
