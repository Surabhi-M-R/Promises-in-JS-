const fs=require('fs');
const path=require('path');

const fileName="test.txt";
const filePath=path.join(__dirname,fileName);
console.log(filePath);

const writeFile=fs.writeFileSync(
    fileName,
    " this is the initial data",
    "utf-8"
);

console.log(writeFile);

const readFile=fs.readFileSync(filePath,"utf-8")

console.log(readFile);

/* The code `const appendFile=fs.appendFileSync(filePath, "\n this is the updated data ", "utf-8");` is
appending the string "\n this is the updated data " to the file specified by the `filePath`. The
`fs.appendFileSync` function is used to append data to a file synchronously. The third argument
"utf-8" specifies the encoding of the data being written. */



const appendFile=fs.appendFileSync(filePath,
    "\n this is the updated data ",
    "utf-8"
);
console.log(appendFile);

const fileDelete=fs.unlinkSync(filePath);
console.log(fileDelete);

const newFileName="renamedFile.txt";
const updatedFile=path.join(__dirname,newFileName);
const renameFile=fs.renameSync(filePath,updatedFile);
console.log(renameFile);


