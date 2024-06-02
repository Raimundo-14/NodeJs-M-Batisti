const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preefrida?', (language)=> {
    console.log(`A minha linguagem preefrida é: ${language}`)
    readline.close()
})