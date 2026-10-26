const fs = require('fs');
const path = require('path');
const src = path.resolve(__dirname, '../node_modules/xlsx/dist/xlsx.full.min.js');
const dest = path.resolve(__dirname, '../vendor/xlsx.full.min.js');
fs.copyFileSync(src, dest);
console.log('Bundled local Excel parser:', dest);
