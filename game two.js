// @§ts-check

confirm("Hello 🙂 Try to guess the number out of 10.\nLet's play!");

var randomNumber = Math.floor(Math.random() * 10);

while (true) {  
    let userInput = prompt("What is the number?");
    let userNumber = Number.parseInt(userInput, 10);

    if (userNumber < randomNumber) {
        confirm("You are wrong 😬 The number is greater then yours");
    } 
    if (userNumber > randomNumber) {
        confirm("You are wrong 😬 The number is less then yours");
    }
    if (userNumber === randomNumber) {
        break;
    }
}

confirm("You win 🎉");


