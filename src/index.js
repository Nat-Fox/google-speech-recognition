const path = require('path');
const recognition = require('./recognition');
const processing = require('./processing');
const chalk = require('chalk');


// const fileName = `${path.resolve()}/recordings/flac/custom-hola.flac`;
// const fileName = `${path.resolve()}/recordings/flac/tid-super-short.flac`;
// const fileName = `${path.resolve()}/recordings/flac/good.flac`;
//const fileName = `${path.resolve()}/recordings/flac/bad.flac`;
//const fileName = `${path.resolve()}/recordings/flac/tid-super-short.flac`;
console.log('PATH', path.resolve())
const fileName = `${path.resolve()}/recordings/flac/12.flac`;


// Reconocimiento del audio enviado y transpaso a texto (transcription)
recognition(fileName)
    .then(recognitionResult => {

        // console.info(JSON.stringify(response, null, 4));
        const response = recognitionResult[0];
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');

        console.info(
            chalk.cyan('[Google Speech Recognition Response] => '), 
            chalk.bold.white(transcription)
        );

        /** 
         * Procesamiento de lenguage natural (analisis de sentimientos) 
         * sobre el texto obtenido de Speech API
         */
        processing(transcription)
            .then(processingResult => {
                console.info(
                    chalk.cyan('[Google Language processing Response] => '),
                    JSON.stringify(processingResult, null, 4)
                );
            })
            .catch(error => {
                console.info(chalk.red('[Processing Error] => '), error);        
            });

    })
    .catch(error => {
        console.info(chalk.red('[Recognition Error] => '), error);
    });
