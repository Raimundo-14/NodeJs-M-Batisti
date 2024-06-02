const fs = require("fs"); // file system

// readFile(ler arquivo) /utf8(acentos ou carcteres especiais) / err(erro) /data(arquivo )
fs.readFile("arquivo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  console.log(data);
});
