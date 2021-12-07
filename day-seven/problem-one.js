/* 
How much fuel must the crabs spend to align to a
specific horizontal position?
*/

const { rawFileHelper } = require('../file-helper');

rawFileHelper('./day-seven/input.txt').then(fileOutput => {
    let lowestFuel;
    const crabMap = new Map();

    fileOutput.forEach(crab => {
        if (crabMap.has(crab)) {
            crabMap.set(crab, crabMap.get(crab) + 1);
        } else {
            crabMap.set(crab, 1);
        }
    });

    const crabKeys = [ ...crabMap.keys() ];
    const minKey = Math.min(...crabKeys);
    const maxKey = Math.max(...crabKeys);

    const midValue = maxKey - minKey;

    let spread = 0;

    while ( spread < midValue ) {
        const leftCheck = getFuelTotal(crabKeys, crabMap, midValue - spread);
        const rightCheck = getFuelTotal(crabKeys, crabMap, midValue + spread);

        const lowest = (leftCheck < rightCheck) ? leftCheck : rightCheck;
        
        if (!lowestFuel || lowest < lowestFuel) {
            lowestFuel = lowest;
        }

        spread++;
    }

    console.log(lowestFuel);

});

getFuelTotal = (keys, posMap, position) => {
    let fuelTotal = 0;

    keys.forEach(key => {
        const numCrabs = posMap.get(key);
        const fuel = Math.abs(position - key) * numCrabs;
        fuelTotal = fuelTotal + fuel;
    });

    return fuelTotal;
}