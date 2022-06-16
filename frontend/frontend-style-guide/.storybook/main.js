const path = require("path");

module.exports = {
  stories: [
    "../dist/**/*.stories.@(js|jsx|ts|tsx)",
    "../dist/**/*.stories.mdx",
    "../wiki/**/*.stories.mdx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    '@storybook/addon-a11y',
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
        sassLoaderOptions: {
          implementation: require("sass")
        },
      },
    },
  ],
  framework: "@storybook/html",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
