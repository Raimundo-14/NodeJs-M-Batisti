const fs = require('fs')

fs.stat('novoarquivo.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  //verificar se é um arquivo
  console.log(stats.isFile())
  // verificar se é um diretório
  console.log(stats.isDirectory())
  //verificica se é um link simbolico
  console.log(stats.isSymbolicLink())
  //verificar  a data é hora 
  console.log(stats.ctime)
  console.log(stats.size)
})