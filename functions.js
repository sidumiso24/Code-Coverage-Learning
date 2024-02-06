// create a function that greets user and displays 'Hello there, friend'
function greetUser(username) {
    greeting = "Hello there, " + username + "!";
    return greeting;
}

function greetUser() {
    greeting = "Hello there, friend!";
    return greeting;
}

module.exports = {greetUser};