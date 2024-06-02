//nome

console.log(process.argv)
//'C:\\Program Files\\nodejs\\node.exe', index[0]
//'D:\\PROGRAMAÇÃO\\COMPASS\\UDEMY\\JS-Matheus-Batisti\\NODE.JS\\2_FUNDAMENTOS\\4_ler_argumentos\\index.js', index[1]
//'nome=Raimundo' index[2]

const args = process.argv.slice(2)
console.log(args)
// 'C:\\Program Files\\nodejs\\node.exe',
//'D:\\PROGRAMAÇÃO\\COMPASS\\UDEMY\\JS-Matheus-Batisti\\NODE.JS\\2_FUNDAMENTOS\\4_ler_argumentos\\index.js',
//'nome=Raimundo'
//retornou apeenas o argumento
//[ 'nome=Raimundo' ]

// /[ 'nome=Raimundo' ] vou buscar o index [0](já que é o único que existe)
//split [ 'nome=Raimundo' ] vou dividir a string 
const nome = args[0].split('=')[1]
console.log(nome)