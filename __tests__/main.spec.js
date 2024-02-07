// import { greetUser } from "../functions.js";

// jest.mock('greetUser', () => jest.fn())


function greetUser() {
    greeting = "Hello there, friend!";
    return greeting;
}

describe("Function", () => {
    test('Greeting the user message', () => {
        expect(greetUser()).toBe("Hello there, friend!");
    });
})


// function to check the factorial of parsed number
function factorialize(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
        return num * factorialize(num - 1);
    }
}

// const { factorialize } = require("./maths");


// test("factorial of 3", () => {
//     expect(factorialize(3)).toBe(6);
// });

// test("factorial of 5", () => {
//     expect(factorialize(5)).toBe(120);
// });

test("factorial of 3 is not 5", () => {
    expect(factorialize(3)).not.toBe(5);
});


function greetUserWithName(username) {
    greeting = "Hello there, " + username + "!";
    return greeting;
}