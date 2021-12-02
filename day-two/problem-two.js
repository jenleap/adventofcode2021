/* 
What do you get if you multiply your final horizontal position
by your final depth?
*/

const { strFileHelper } = require("../file-helper");

strFileHelper('./day-two/input.txt').then(fileOutput => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    fileOutput.forEach(command => {
        const direction = command.split(" ")[0];
        const amount = parseInt(command.split(" ")[1]);

        switch(direction) {
            case 'forward':
                horizontal += amount;
                depth += aim * amount;
                break;
            case 'down':
                aim += amount;
                break;
            case 'up':
                aim -= amount;
                break;
            default:
                break;
        }
    })

    console.log(horizontal * depth);
})