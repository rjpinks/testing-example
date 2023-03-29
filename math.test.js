/*
npm init -y
.gitignore, added node_modules
installed jest => npm i jest --save-dev

GOAL:
    - Write four functions that add, subtract, multiply, and divide two different numbers->passed in as a parameter.
*/

const Math = require("./math");

describe("Math", () => {
    describe("#add",  () => {
        it("calculates sum of 5 and 6", () => {
            const math = new Math();

            const result = math.add(5,6);
            const sum = 11;

            expect(result).toBe(sum);
        })
        // it("throws an error when non numbers are parameters", () => {
        //     const math = new Math()
        //     const result = () => {math.add("a", 4)};
        //     const err = new Error("Parameters must be numbers")
        //     expect(result).toThrow(err);
        // })
    })
    
    describe("#multiply",  () => {
        it("calculates product of 5 and 6", () => {
            const math = new Math();

            const result = math.multiply(5, 6);
            const product = 30;

            expect(result).toBe(product);
        })
    })

    describe("#division",  () => {
        it("divides 10 and 2 and returns result", () => {
            const math = new Math();

            const result = math.division(10, 2);
            const theThing = 5;

            expect(result).toBe(theThing);
        })
    })

    describe("#subtract",  () => {
        it("subtracts 10 and 2 and returns result", () => {
            const math = new Math();

            const result = math.subtract(10, 2);
            const theThing = 8;

            expect(result).toBe(theThing);
        })
    })
})