const fs = require("fs");
const fse = require('fs-extra')
fs.watch("./public", {}, (event, filename) => {
    fse.copySync('public', 'dist')
})