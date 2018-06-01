const fse = require('fs-extra')
const fs = require("fs");
const path = require("path");

const fileContents = `/*    /index.html   200`
fs.writeFileSync(path.join(__dirname, "..", "dist", "_redirects"), fileContents);

fse.copySync('src/images', 'dist/images')

const htmlExtras = `<link rel="manifest" href="/manifest.json">
<link rel="icon" href="/images/icons/icon-72x72.png">
<title>`
fse.copySync("src/manifest.json", "dist/manifest.json");

let html = fs.readFileSync("dist/index.html", "utf8");
console.log(html);
html = html.replace("<title>", htmlExtras);
fs.writeFileSync("dist/index.html", html, "utf8");