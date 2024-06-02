const fs = require("fs")

console.log("Início")
fs.writeFile('arquivo.txt', 'hello world', function (err) {
    setTimeout(function () {
        console.log('Aquivo criado')
    }, 1000)
    })


   

console.log("fim")

