var user = prompt("You are walking along the tall grass when a little yellow\
rat pops out! He looks pissed and is brimming with electricity form his cute\
red cheeks! This must be a pikachu! What will you do?\
(PokeFight, run, nothing):").toLowerCase();
var pikaLvl = 50;

switch(user) {
 case 'pokefight':
     var pokemon = prompt("Choose a pokemon!").toLowerCase();
     var pokeLvl = prompt("What level is " + pokemon + "?").toLowerCase();
     if (pokemon && (pokeLvl > pikaLvl)) {
         console.log(pokemmon + " is much stronger than pikachu. He fucks pikachu up!");
     } else {
         console.log("Pikachu is lvl 50! HE STOMPS " + pokemon.toUpperCase() + "ALL THE WAY\
         BACK TO PALLET TOWN!");
     }
     break;
 case 'run':
     var fly = prompt("Can you fly away on any of your pokemon?!(yes or no)").toLowerCase();
     var speed = prompt("Are you a fast runner at least!?(yes or no)").toLowerCase();
     if ((fly === 'yes' || speed === 'yes')) {
         console.log("How are you going to catch them all if you run away? You escape,\
         but not with your dignity..");
     } else {
         console.log("Pikachu jumps on your slow, useless face and bites the shit out of it!\
         You won't be challenging gym leaders any time soon..");
     }
     break;
 case 'nothing':
     console.log("You probably should've done something.\
     Pikachu zaps you with thunderbolt for 500 fucking damage\
     and then iron tails you to death! What a cute little pikachu!\
     Oh yeah and you're dead!");
     break;
 default:
    console.log("Pikachu doesn't understand wtf you're doing\
    and kills you with mufuckin THUNDER!! BZZAP!");
}