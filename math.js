const Math = function () {}

Math.prototype.add = (...userInputs) => {
    let sum = 0
    for (const userInput of userInputs) {
        sum += userInput;
    }
    // if (typeof x !== "number" || typeof y !== "number") {
    //     throw new Error("Parameters must be numbers");
    // }
    return sum
};
Math.prototype.multiply = (...userInputs) => {
    let product = 1;
    for (const userInput of userInputs) {
        product *= userInput;
    }
    return product
};

Math.prototype.division = (x, y) => {
    return x / y
};

Math.prototype.subtract = (...userInputs) => {
    let theThing = userInputs[0] + userInputs[0];
    for (const userInput of userInputs) {
        theThing -= userInput;
    }
    return theThing
};

module.exports = Math
