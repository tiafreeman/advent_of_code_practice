const { input } = require('./input');

let filteredInput = input.map(item => item);

for (let i = 0; i < input[0].length; i++) {
    const sum = filteredInput.reduce((total, currentValue) => {
        return total + currentValue[i];
    }, 0);

    if (sum / filteredInput.length >= 0.5) {
        filteredInput = filteredInput.filter(item => item[i] === 1);
    } else if (sum / filteredInput.length < 0.5) {
        filteredInput = filteredInput.filter(item => item[i] === 0);
    }

    if (filteredInput.length === 1) {
        console.log('done', filteredInput[0].join(''));
        break;
    }

}

// 100111101011

// 2539

// 001011000101

// 709

