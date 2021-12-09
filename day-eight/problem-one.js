/*
In the output values, how many times do digits 1, 4, 7 or 8 appear
*/

const { strFileHelper } = require("../file-helper");

strFileHelper('./day-eight/input.txt').then(fileOutput => {
    const outputData = fileOutput.map(line => {
        return line.split('|')[1].trim();
    });

    const outputArray = outputData.reduce((acc, val) => acc.concat(val.split(" ")), []);

    let numCount = 0;

    outputArray.forEach(num => {
        if (num.length === 2 || num.length === 3 || num.length === 4 || num.length === 7) {
            numCount++;
        }
    })

    console.log(numCount);
    
});