var user = prompt("You're walking through the forest, when suddenly you meet a troll! Do you FIGHT him, SPEAK with him, or RUN?").toLowerCase();

switch (user) {
    case 'fight':
        var strong = "How courageous! Are you strong (YES or NO)?".toLowerCase();
        var smart = prompt("Are you smart (YES or NO)?").toLowerCase();
        if (strong === 'yes' || smart === 'yes') {
            console.log("You only need one of the two! You beat the troll--nice work!");
        } else {
            console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
        break;
        
    case 'speak': 
        var pay = prompt("You offer to pay the troll. Do you have any money (YES or NO)?").toLowerCase();
        if (pay === 'YES') {
            console.log("Great! You pay or help the troll and continue on your way.");
        } else {
            console.log("Dang! You get whomped!");
        }
        break;
        
    case 'run':
    var fast = prompt("Let's try it! Are you fast (YES or NO)?").toLowerCase();
    var shooes = prompt("Do you have a right shooes (YES or NO)?").toLowerCase();
    if (fast === 'YES' && shooes === 'YES') {
        console.log("You got away!");
    } else {
      console.log("You're not fast and you don't have a right shooes? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}