const { input } = require('./input');

let count = 0;
for (let i = 0; i < input.length - 3; i++) {

    const currWindow = input[i] + input[i + 1] + input[i + 2];
    const nextWindow = input[i + 1] + input[i + 2] + input[i + 3]
     if (nextWindow > currWindow) {
            count++;
        }



}
console.log("number of increased values ", count);