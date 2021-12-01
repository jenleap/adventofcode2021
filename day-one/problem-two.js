/* 
Considering sums of a 3-measurement window, how many sums are 
larger than the previous sum?
*/

const { fileHelper } = require('../file-helper');

fileHelper('./day-one/input.txt').then(fileOutput => {
    let increaseCount = 0;
    fileOutput.forEach((num, i) => {
        if (i > 2) {
            const firstWindow = fileOutput[i - 3] + fileOutput[i - 2] + fileOutput[i - 1];
            const secondWindow = fileOutput[i - 2] + fileOutput[i - 1] + num;
            if (firstWindow < secondWindow) {
                increaseCount++;
            }
        }
    });
    console.log(increaseCount);
});