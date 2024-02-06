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
