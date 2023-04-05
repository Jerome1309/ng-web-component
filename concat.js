const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-web-component/runtime.js",
    "./dist/angular-web-component/polyfills.js",
    "./dist/angular-web-component/main.js",
  ];
  await concat(files, "./dist/angular-web-component/angular-web-component.js");
})();
