const speech = require('@google-cloud/speech');
const fs = require('fs');

// Crea el cliente de google con las credenciales descargadas
const client = new speech.SpeechClient({
    keyFilename: './credentials.json'
});

// Nombre del archivo de audio a analizar
const fileName = './recordings/flac/tid-super-short.flac';

// Reads a local audio file and converts it to base64
const file = fs.readFileSync(fileName);
const audioBytes = file.toString('base64');

// The audio file's encoding, sample rate in hertz, and BCP-47 language code
const audio = {
  content: audioBytes,
};

// const config = {
//   encoding: 'LINEAR16',
//   sampleRateHertz: 16000,
//   languageCode: 'es-CL',
// };

const config = {
    encoding: 'FLAC',
    sampleRateHertz: 48000,
    languageCode: 'es-CL',
    speechContexts: [{
      phrases: ['gladis']
    }]
};

const request = {
  audio: audio,
  config: config,
};

// Detects speech in the audio file
client
  .recognize(request)
  .then(data => {
    console.info('Full response => ', JSON.stringify(data, null, 4));
    const response = data[0];
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    console.log(`Transcription: ${transcription}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });