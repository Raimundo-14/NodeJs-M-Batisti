const http = require("http")
// criando a porta 3000
const port = 3000
//criando o servidor
const server = http.createServer((req, res)=> {
    //res.write resposta para o usúario
    res.write('Oi HTTP')
    //resposta de encerramento
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})