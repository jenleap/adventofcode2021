/* How many lanternfish would there be after 80 days? */

const { rawFileHelper } = require('../file-helper');

rawFileHelper('./day-six/input.txt').then(fileOutput => {
    let fishArray = new Array(9).fill(0);

    fileOutput.forEach(fish => {
        fishArray[fish] = fishArray[fish] + 1;
    });

    console.log(fishArray);

    let days = 0;

    while (days < 80) {
        days++;

        let tempArray = [];

        for (let i = 0; i <= 8; i++) {
            if (i === 0) {
                tempArray[6] = fishArray[i];
                tempArray[8] = fishArray[i];
            } else if (i === 7) {
                tempArray[6] = tempArray[6] + fishArray[i];
            } else {
                tempArray[i - 1] = fishArray[i];
            }
        }

        fishArray = tempArray;
    }

    const totalFish = fishArray.reduce((total, num) => total + num, 0);

    console.log(totalFish);
})