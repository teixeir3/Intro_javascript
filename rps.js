var rps = function(throw1, throw2) {
    if (throw1 === throw2) {
        return "tie!";
    } else if (throw1 === "rock" && throw2 === "paper") {
        return "player 2 wins!";
    } else if (throw1 === "rock" && throw2 === "scissors") {
        return "player 1 wins!";
    } else if (throw1 === "paper" && throw2 === "rock") {
        return "player 1 wins!";
    } else if (throw1 === "paper" && throw2 === "scissors") {
        return "player 2 wins!";
    } else if (throw1 === "scissors" && throw2 === "rock") {
        return "player 2 wins!";
    } else if (throw1 === "scissors" && throw2 === "paper") {
        return "player 1 wins!";
    } else {
        return "INCORRECT INPUT! EVERYONE LOSES! COMPUTERS TAKE OVER THE WORLD AS A RESULT!";
    }
};

console.log(rps("rock", "paper"));