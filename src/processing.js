const language = require('@google-cloud/language');
const path = require('path');
const Bluebird = require('bluebird');
const chalk = require('chalk');

const client = new language.LanguageServiceClient({
    keyFilename: `${path.resolve()}/credentials.json`
});

module.exports = text => {

    console.info(chalk.green('[Analizing text] => '), chalk.bold.white(text));

    const document = {
        content: text,
        type: 'PLAIN_TEXT',
    };

    // Analiza entidad y sentimientos del texto entregado
    return Bluebird.props({
        entities: client.analyzeEntities({ document }),
        sentiments: client.analyzeSentiment({ document })
        // annotations: client.annotateText({ document, features: {} })
    });
};