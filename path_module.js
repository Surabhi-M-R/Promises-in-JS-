const path=require('path');

console.log(__dirname);
console.log(__filename);

const filepath=path.join("folder","students","data.txt");
console.log(filepath);

const parseData=path.parse(filepath);
const resolvePath=path.resolve(filepath);
const extname=path.extname(filepath);
const basename=path.basename(filepath);
const dirname=path.dirname(filepath);