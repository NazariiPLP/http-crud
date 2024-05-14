const fs = require('fs');
const path = require('path');

// __dirname - константа ноди, яка зберігає абсолютну адресу поточної папки
// __filename - константа ноди, яка зберігає абсолютну адресу поточного файлу

const currentFileName = path.basename(__filename); // index.js

const db = {};

const filesNames = fs.readdirSync(__dirname);
const filteredArray = filesNames.filter(
    (currentFile) => /.js$/.test(currentFile) && currentFile !== currentFile
);

filteredArray.forEach(currentFile => {
    const absPathToFile = path.resolve(__dirname, currentFile);
    
    const Model = require(absPathToFile);
    Model._client = client;
    db[Model._tableName] = Model;
});