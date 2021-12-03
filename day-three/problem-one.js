/*
what is the power consumption of the submarine?
*/

const { strFileHelper } = require("../file-helper");

strFileHelper('./day-three/input.txt').then(fileOutput => {
    let zeroBits = new Array(12).fill(0);
    let oneBits = new Array(12).fill(0);

    let gammaBits = "";
    let epsilonBits = "";

    fileOutput.forEach(binNum => {
        const bits = binNum.split("");
        bits.forEach((bit, i) => {
            (bit == 0) ? zeroBits[i]++ : oneBits[i]++;
        });
    });

    zeroBits.forEach((bit, i) => {
        if (bit > oneBits[i]) {
            gammaBits += 0;
            epsilonBits += 1;
        } else {
            gammaBits += 1;
            epsilonBits += 0;
        }
    });

    // Convert binary to decimal
    const gammaRate = parseInt(gammaBits, 2);
    const epsilonRate = parseInt(epsilonBits, 2);

    console.log(gammaRate * epsilonRate);
});