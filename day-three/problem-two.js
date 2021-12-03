/*
TODO: Try this as a Tree.
What is the life support rating of the submarine?
*/

const { strFileHelper } = require("../file-helper");

strFileHelper('./day-three/input.txt').then(fileOutput => {
    let oxygenValues = [...fileOutput];
    let scrubberValues = [...fileOutput];

    for (let i = 0; i <= 12; i++) {
        if (oxygenValues.length > 1) {
            const mostCommonOx = getMostCommon(oxygenValues, i);
            oxygenValues = oxygenValues.filter(val => val[i] == mostCommonOx);
        }

        if (scrubberValues.length > 1) {
            const mostCommonSc = getMostCommon(scrubberValues, i);
            scrubberValues = scrubberValues.filter(val => val[i] != mostCommonSc);
        }
    }

    // Convert binary to decimal
    const oxygenRating = parseInt(oxygenValues[0], 2);
    const scrubberRating = parseInt(scrubberValues[0], 2);

    console.log(oxygenRating * scrubberRating);
});

getMostCommon = (arr, pos) => {
    let zeroCount = 0;
    let oneCount = 0;

    arr.forEach(a => a[pos] == 0 ? zeroCount++ : oneCount++);

    return (zeroCount > oneCount) ? 0 : 1;
}