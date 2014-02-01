var slaying = true;

var youHit = Math.floor(Math.random() * 2);
var dragonHit = Math.floor(Math.random() * 10 + 1);

var dragonDamage = 10;
var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;

var yourHP = 10;
var dragonHP = 15;

while (slaying) {

    if (youHit) {
        console.log("Your hit strikes the dragon for " + damageThisRound + " damage!");
        totalDamage += damageThisRound;
        console.log("The dragon has " + (dragonHP - totalDamage) + " health left!");

        if (totalDamage >= dragonHP) {
            console.log("You've slain the dragon! HUZZAH!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You strike at the dragon and miss!");
    }
    if ((dragonHit > 6)&&slaying) {
        console.log("The dragon blows fire at you, burning you to a crisp!");
        slaying = false;
    } else {
        console.log("The dragon blows a giant ball of fire in your direction!");
        console.log("You dive out of the way, avoiding an early grave!");
    }
}