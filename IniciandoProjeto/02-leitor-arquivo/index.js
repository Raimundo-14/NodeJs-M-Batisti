// readFile ler arquivos

let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivos.txt", "Texto por writeFile", (error) => {
  if(error) {
    throw error;
  } else {
    console.log("Escreveu com sucesso");
  }
});
