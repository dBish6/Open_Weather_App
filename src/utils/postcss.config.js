const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const postcssPxToRem = require("postcss-pxtorem");

module.exports = {
  plugins: [
    cssnano({
      preset: "default",
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        "nesting-rules": true,
      },
    }),
    postcssPxToRem({
      propList: ["*"],
    }),
  ],
};
