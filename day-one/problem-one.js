/* 
How many measurements are larger than the previous measurement?

Input: Array of depth measurements
Output: Number of measurements that are larger than the previous measurement

*/

const { fileHelper } = require('../file-helper');

fileHelper('./day-one/input.txt').then(fileOutput => {
    let increaseCount = 0;
    fileOutput.forEach((num, i) => {
        if (i > 0) {
            if (fileOutput[i - 1] < num) {
                increaseCount++;
            }
        }
    });
    console.log(increaseCount);
});
