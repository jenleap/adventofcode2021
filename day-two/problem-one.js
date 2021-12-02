/* 
What do you get if you multiply your final horizontal position
by your final depth?
*/

const { strFileHelper } = require("../file-helper");

strFileHelper('./day-two/input.txt').then(fileOutput => {
    let horizontal = 0;
    let depth = 0;

    fileOutput.forEach(command => {
        const direction = command.split(" ")[0];
        const amount = parseInt(command.split(" ")[1]);

        switch(direction) {
            case 'forward':
                horizontal += amount;
                break;
            case 'down':
                depth += amount;
                break;
            case 'up':
                depth -= amount;
                break;
            default:
                break;
        }
    })

    console.log(horizontal * depth);
})