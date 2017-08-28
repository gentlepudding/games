playRound();

function playRound() {
    var userChoice = getUser();
    var computerChoice = getRandom();   
    
    return compare(userChoice, computerChoice);
}

function getUser() {
    return prompt(
        "Do you choose rock, paper or scissors?");
}

function getRandom() {
    var num = Math.random();
    
    if (num <= 0.33) {
        return "rock";
    }
    
    if (num <= 0.66) {
        return "paper";
    }
    
    return "scissors";
}

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return playRound();
    }
    
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins!";
        } else {
            return "paper wins!";
        }
    }
    
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins!";
        } else {
            return "scissors wins!";
        }
    }
    
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins!";
        } else {
            return "scissors wins!";
        }
    }
    
    return "Error! Please, correct your variant";
}

