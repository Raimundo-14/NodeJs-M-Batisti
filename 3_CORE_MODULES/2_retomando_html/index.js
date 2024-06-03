const http = require("http")
// criando a porta 3000
const port = 3000
//criando o servidor
const server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com HTML!</h1><p>Testando nossa atualização</p>')
   
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})