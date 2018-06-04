const speech = require('@google-cloud/speech');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// Crea el cliente de google con las credenciales descargadas
const client = new speech.SpeechClient({
    keyFilename: `${path.resolve()}/credentials.json`
});

module.exports = filename => {
    console.info(chalk.green('[Sending file] => '), chalk.bold.white(filename));
    const file = fs.readFileSync(filename);
    const audioBytes = file.toString('base64');

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
        content: audioBytes,
    };

    const config = {
        encoding: 'FLAC',
        sampleRateHertz: 44100,        
        languageCode: 'es-CL',
        speechContexts: [{
            phrases: ['gladys']
        }]
    };

    const request = {
        audio: audio,
        config: config,
    };

    return client.recognize(request);
};