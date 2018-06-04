#### Google Speech API & Natural Processing API Sample

### Instrucciones (luego de clonar el repo y acceder a la carpeta clonada)

```bash
# Instalamos yarn 
$ npm i -g yarn 

# Instalamos todas las dependencias
$ yarn install

# Ejecutamos el proyecto
$ yarn start
```

Con estos deberíamos ver un ejemplo de el texto que se obtiene al analizar la grabación, por defecto en el código **src/index.js -> linea 8** está puesto el archivo **tid-super-short.flac** que es el archivo original de la grabación TID  cortada y convertida a formato flac a 48000 Hz rate (con el script en **scripts/convert.js** que usa la librería **avconv**) y luego se muestran 2 objetos correspondientes al analisis de entidades y sentimiento del texto obtenido con Speec API.

### Referencias

#### SDKS de NodeJS para Google Cloud Platform

* [Librería NodeJS de google para Speech API](https://github.com/googleapis/nodejs-speech)
* [Documentación](https://cloud.google.com/nodejs/docs/reference/speech/1.1.x/v1.SpeechClient)

* [Librería NodeJS de google para procesamiento de lenguage natural](https://github.com/googleapis/nodejs-language/)
* [Documentación](https://cloud.google.com/nodejs/docs/reference/language/1.1.x/v1.LanguageServiceClient)

#### Speech API Recomendaciones y advertencias

* [Mejores prácticas](https://cloud.google.com/speech/docs/best-practices)
* [Codificación de audio](https://cloud.google.com/speech/docs/encoding)


#### Conversión de archivos a formato util para Google Speech API

* [Instalación de avconv  en macOS](https://superuser.com/questions/568464/how-to-install-libav-avconv-on-osx)

* [Thread de stack overflow que ayudo a entender como convertir](https://stackoverflow.com/questions/41554638/creating-suitable-wav-files-for-google-speech-api)

* [Instalacion de comando para convertir archivos](https://superuser.com/questions/568464/how-to-install-libav-avconv-on-osx)

* [Bases de funcionamiento de /scripts/convert.js](https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js)