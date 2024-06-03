const http = require("http")
const fs = require("fs");
// criando a porta 3000
const port = 3000
//criando o servidor
const server = http.createServer((req, res)=> {
    const urlinfo = require('url').parse(req.url, true)
    const name = urlinfo.query.name

    if(!name) {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type': 'Text/html'})
            res.write(data)
            return res.end()
        })
    }else {
        // '\r\n' server para quebra de linha independente da sistema operacional 
        const nameNewLine = name +',\r\n'
        //escrever no arquivo
        fs.appendFile('arquivo.txt', nameNewLine, function(err, data) {
            res.writeHead(302, { 
                Location: '/',
            })
            return res.end()
        })


    }   
   
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})