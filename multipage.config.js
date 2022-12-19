const path = require("path");

res = {};
res.entry = {
  // uikit: path.join(__dirname, "./src/uikit/uikit-page/uikit-page.js"),
  index: path.join(__dirname, "./src/pages/index/index.js"),
  "search-room": path.join(__dirname, "./src/pages/search-room/search-room.js"),
  signup: path.join(__dirname, "./src/pages/signup/signup.js"),
  signin: path.join(__dirname, "./src/pages/signin/signin.js"),
};

res.pages = [
  // { chunks: ["uikit"], page: "uikit.html", template: path.join(__dirname, "./src/uikit/uikit-page/uikit-page.pug") },
  { chunks: ["index"], page: "index.html", template: path.join(__dirname, "./src/pages/index/index.pug") },
  { chunks: ["search-room"], page: "search-room.html", template: path.join(__dirname, "./src/pages/search-room/search-room.pug") },
  { chunks: ["signup"], page: "signup.html", template: path.join(__dirname, "./src/pages/signup/signup.pug") },
  { chunks: ["signin"], page: "signin.html", template: path.join(__dirname, "./src/pages/signin/signin.pug") },
];

module.exports = res;
