const path = require('path');
console.log(path.sep);

const filePath = path.join(__dirname, '/content/', 'subfolder', 'test.txt');
console.log(filePath);


const dir = path.dirname(filePath);
const base = path.basename(filePath);
const ext = path.extname(filePath);

console.log(dir);
console.log(base);
console.log(ext);

const absolute = path.resolve(__dirname, '/content/', 'subfolder', 'test.txt');
console.log(absolute);