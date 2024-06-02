const fs = require("fs");

console.log("Início");
//Sync sincrono 
fs.writeFileSync("arquivo.txt", "hello world");
console.log("Fim");


