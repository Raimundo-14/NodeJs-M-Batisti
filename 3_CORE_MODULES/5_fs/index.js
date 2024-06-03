const http = require("http")
const fs = require("fs");
// criando a porta 3000
const port = 3000
//criando o servidor
const server = http.createServer((req, res)=> {
    fs.readFile('menssagem.html', function(err, data){

        res.writeHead(200, {'Content-Type': 'Text/html'})
        res.write(data)
        return res.end()
    })        
   
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})