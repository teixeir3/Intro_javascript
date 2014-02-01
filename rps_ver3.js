var rps = function () {
    var userChoice = "";

    var promptUser = function() {
        userChoice = prompt("Do you choose rock, paper or scissors?");
    }

    for (promptUser(); (userChoice != "scissors" || userChoice != "rock" || userChoice != "paper"); promptUser()) {
    }

    var computerChoice = Math.random();

    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    var compare = function(throw1, throw2) {

        if (throw1 === throw2) {
            return "The result is a tie!";
        }

        if (throw1 === "rock") {
            if (throw2 === "scissors") {
                return "rock wins";
            } else {
                return "paper wins";
            }
        }
        if (throw1 === "paper") {
            if (throw2 === "rock") {
                return "paper wins";
            } else {
                return "scissors wins";
            }
        }
        if (throw1 === "scissors") {
            if (throw2 === "rock") {
                return "rock wins";
            } else {
                return "scissors wins";
            }
        }
    };

};

var playRPS = function(){

    for(var gameResult = rps(); gameResult === "The result is a tie!"; gameResult = rps()) {
        console.log(rps());
    }
};