// Ejecuta el comando para convertir un archivo a flac legible para Google Speech API
const util = require('util');
const exec = util.promisify(require('child_process').exec);
// parsear argumentos
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');

const command = `avconv -i ${argv.input} -y -ar 44100 -ac 1 ${argv.output}`;


exec(command)
    .then(result => {
        console.info(chalk.green('Conversion Finished - output: \n\n'), result.stderr || result.stderr);
    })
    .catch(error => {
        console.info(chalk.red('Error:'), error);
    });
