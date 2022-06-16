import { task, series, watch } from "gulp";
import { getLSG } from "./tasks/getLSG";
import { getCmpLib } from "./tasks/getCmpLib";
import { getStories } from "./tasks/getStories";

task("build", series(getLSG, getCmpLib, getStories));

task("watch", () => {
  watch(["../living-style-guide/source/**/*.scss"], series(getLSG));

  watch(["../js-component-library/source/**/*.js"], series(getCmpLib));

  watch(["stories/**/*.js", "stories/**/*.mdx"], series(getStories));
});
