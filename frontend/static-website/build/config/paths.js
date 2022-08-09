export const paths = {
  src: {
    assets: {
      assetFiles: ["../../../assets/dist/**/*"],
      svgFiles: ["dist/assets/svgs"]
    },
    meta: {
      metaFiles: "./source/meta/*"
    },
    html: {
      htmlDir: "./source",
      htmlFiles:"./source/html/*.html"
    },
    styles: {
      scssDir: `../../living-style-guide/source/`,
      scssFiles: [`../../living-style-guide/source/**/*.scss`],
      scssPages: [`../../living-style-guide/source/**/pages/**/*.page.scss`],
      scssLayers: [
        `../../living-style-guide/source/modules/structure/pages/**/*.page.layer.scss`,
        `../../living-style-guide/source/modules/structure/templates/**/*.template.layer.scss`,
        `../../living-style-guide/source/modules/structure/grid/**/*.grid.layer.scss`
      ],
      scssComponents: [
        `../../living-style-guide/source/**/components/**/*.atom.scss`,
        `../../living-style-guide/source/**/components/**/*.molecule.scss`,
        `../../living-style-guide/source/**/components/**/*.organism.scss`,
        // `../../living-style-guide/source/**/templates/**/*.template.scss`,
        // `../../living-style-guide/source/**/templates/**/*.page.scss`,
      ],
    },
    scripts: {
      javaScriptDir: `../../js-component-library/source`,
      javaScriptFiles: [`../../js-component-library/source/**/*.js`],
      javascriptPages: [`../../js-component-library/source/**/pages/**/*.page.js`]
    }
  },
  dist: {
    dir: `./dist`,
  },
};
