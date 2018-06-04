const speech = require('@google-cloud/speech');
// const fs = require('fs');
const path = require('path');
// const chalk = require('chalk');

const client = new speech.SpeechClient({
  keyFilename: `${path.resolve()}/credentials.json`
});

var encoding = 'FLAC';
var sampleRateHertz = 44100;
var languageCode = 'es-CL';

var config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};

var uri = 'gs://audios_callcenter/12.flac';

var audio = {
  uri: uri,
};

var request = {
  config: config,
  audio: audio,
};

// Handle the operation using the promise pattern.
client.longRunningRecognize(request)
  .then(responses => {
    var operation = responses[0];
    var initialApiResponse = responses[1];
    

    // Operation#promise starts polling for the completion of the LRO.
    return operation.promise();
  })
  .then(responses => {
    console.log('resp', JSON.stringify(responses, null, 4))    
    // The final result of the operation.
    var result = responses[0];

    // The metadata value of the completed operation.
    var metadata = responses[1];

    // The response of the api call returning the complete operation.
    var finalApiResponse = responses[2];

    
  })
  .catch(err => {
    console.error(err);
  });

// var encoding = 'FLAC';
// var sampleRateHertz = 44100;
// var languageCode = 'es-CL';
// var config = {
//   encoding: encoding,
//   sampleRateHertz: sampleRateHertz,
//   languageCode: languageCode,
// };
// var uri = 'gs://audios_callcenter/call1.flac';
// var audio = {
//   uri: uri,
// };
// var request = {
//   config: config,
//   audio: audio,
// };

// // Handle the operation using the event emitter pattern.
// client.longRunningRecognize(request)
//   .then(responses => {
//     var operation = responses[0];
//     var initialApiResponse = responses[1];

//     // Adding a listener for the "complete" event starts polling for the
//     // completion of the operation.
//     operation.on('complete', (result, metadata, finalApiResponse) => {
//       console.log('complete', JSON.stringify(result, null, 4));
//       // doSomethingWith(result);
//     });

//     // Adding a listener for the "progress" event causes the callback to be
//     // called on any change in metadata when the operation is polled.
//     operation.on('progress', (metadata, apiResponse) => {
//       // doSomethingWith(metadata)
//       console.log('ApiResponse', JSON.stringify(apiResponse, null, 4));
//     });

//     // Adding a listener for the "error" event handles any errors found during polling.
//     operation.on('error', err => {
//       // throw(err);
//       console.log('error', JSON.stringify(err, null, 4));
//     });
//   })
//   .catch(err => {
//     console.error(err);
//   });