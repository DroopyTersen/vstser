const fse = require('fs-extra')
const fs = require("fs");
const path = require("path");

const fileContents = `/*    /index.html   200`
fs.writeFileSync(path.join(__dirname, "..", "dist", "_redirects"), fileContents);

fse.copySync('public', 'dist')
