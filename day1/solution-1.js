const { input } = require('./input');

    let increased = 0;
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i + 1] > input[i]) {
            increased += 1;
        }
    }
    console.log("number of increased values ", increased);