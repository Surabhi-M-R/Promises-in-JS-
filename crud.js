const fs=require('fs');
const path=require('path');

const fileName="test.txt";
const filePath=path.join(__dirname,fileName);
console.log(filePath);

// const writeFile=fs.writeFileSync(
//     fileName,
//     " this is the initial data",
//     "utf-8"
// );

// console.log(writeFile);

// const readFile=fs.readFileSync(filePath,"utf-8")

// console.log(readFile);

const appendFile=fs.appendFileSync(filePath,
    "\n this is the updated data ",
    "utf-8"
);
console.log(appendFile);

