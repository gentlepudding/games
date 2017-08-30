var slaying = true;
var myHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*3 + 1);
var totalDamage = 0;

while (slaying) {
    if (myHit === 1) {
        console.log("I hit the dragon");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 4) {
            console.log("I slew the dragon");
             slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("The dragon hits me");
    }
}