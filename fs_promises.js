const fs=require('fs');
const path =require('path');

const fileName='fs_promises.txt';
const filePath=path.join(__dirname,fileName);

const file=__dirname;

fs.promises
    .readdir(file)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err));
    