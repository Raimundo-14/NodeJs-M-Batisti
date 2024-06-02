const inquirer = require('inquirer');

inquirer.prompt([
{
    name: 'p1', message: 'Qual sua primeira nota? ',
},
{   
    name: 'p2', message: 'Qualsua segunda nota? ',

},
])
.then((answer)=> {
    console.log(answer)
    const media = (parseInt(answer.p1) + parseInt(answer.p2)) / 2
    console.log(`À média é: ${media}`)
})
.catch((error)=> console.log(err))