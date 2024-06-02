const chalk = require('chalk');

try {
    console.log('Tentando executar o script...');
    const nota = 9;
    console.log(`Nota: ${nota}`);

    if (nota >= 7) {
        console.log(chalk.green('Parabéns! Você foi aprovado'));
    } else {
        console.log(chalk.bgRed('Você precisa estudar mais'));
    }
} catch (error) {
    console.error('Erro durante a execução do script:', error);
}