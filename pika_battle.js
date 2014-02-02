var user = prompt("You are walking along the tall grass when a little yellow rat pops out! He looks pissed and is brimming with electricity form his cute red cheeks! This must be a pikachu! What will you do? (PokeFight, run, nothing):").toLowerCase();
var pikaLvl = 50

switch(user) {
 case 'pokefight':
     var pokemon = prompt("Choose a pokemon!");
     var pokeLvl = prompt("What level is " + pokemon + "?");
     if (pokemon && (pokeLvl > pikaLvl)) {
         console.log(pokemmon + " is much stronger than pikachu. He fucks pikachu up!");
     } else {
         console.log("Pikachu is lvl 50! HE STOMPS " + pokemon.toUpperCase() + "'S ASS!");
     }
     break;
 case 'run':

     console.log("How are you going to catch them all if you run away? You escape, but not with your dignity..");
     break;
 case 'nothing':
     console.log("You probably should've done something. Pikachu zaps you with thunderbolt for 500 fucking damage and then iron tails you to death! What a cute little pikachu! Oh yeah and you're dead!");
     break;
 default:
    console.log("Pikachu doesn't understand wtf you're doing and kills you with mufuckin THUNDER!! BZZAP!");
}