const fs = require('fs');

exports.fileHelper = (inputFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return;
            }
            const splitData = data.split('\n');
            const parsedData = splitData.map(line => parseInt(line.trim()));

            resolve(parsedData);
        })
    })        
}

exports.strFileHelper = (inputFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return;
            }
            const splitData = data.split('\n');
            const parsedData = splitData.map(line => line.trim());

            resolve(parsedData);
        })
    })        
}