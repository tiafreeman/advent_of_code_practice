const { input } = require('./input');

for (let i = 0; i < input[0].length; i++) {
    const sum = input.reduce((total, currentValue) => {
        return total + currentValue[i];
    }, 0)

    if (sum / input.length > 0.5) {
        console.log(1);
    } else if (sum / input.length < 0.5) {
        console.log(0);
    } else {
        console.log("outlier");
    }

}

//100011100101
// 2277

//011100011010
//1818
