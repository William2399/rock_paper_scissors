function getComputerChoice() {
    result = Math.floor(Math.random() * (3));
    if (result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getUserChoice() {
    let choice = prompt("Please type in your choice: ");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock";
    }
    else if (choice === "paper") {
        return "paper";
    }
    else if (choice === "scissors") {
        return "scissors";
    }
    else {
        console.log("Error in input. Please make sure to type either rock, paper, or scissors")
    }
}

function compareChoices(computer, user) {
    if (computer === user) {
        console.log("It is a tie!");
        return "It is a tie!";
    }
    else if ((computer === "rock" && user === "scissors")) {
        console.log("The computer wins!");
        return "The computer wins!";
    }
    else if ((user === "rock" && computer === "scissors")) {
        console.log("Your win!")
        return "Your win!";
    }
    else if ((computer === "paper" && user === "rock")) {
        console.log("The computer wins!");
        return "The computer wins!";
    }
    else if ((user === "paper" && computer === "rock")) {
        console.log("You win!")
        return "Your win!";
    }
    else if ((computer === "scissors" && user === "paper")) {
        console.log("The computer wins!")
        return "The computer wins!";
    }
    else {
        console.log("You win!")
        return "You win!";
    }
}

function game() {
    let computer_wins = 0;
    let user_wins = 0;
    while (true) {
        computer_selection = getComputerChoice();
        user_selection = getUserChoice();
        round_result = compareChoices(computer_selection, user_selection)
        if (round_result === "The computer wins!") {
            computer_wins = computer_wins + 1;
        }
        else if (round_result === "You win!") {
            user_wins = user_wins + 1;
        }
        if (computer_wins == 5) {
            console.log("The computer wins the game!");
            break;
        }
        else if (user_wins == 5) {
            console.log("The user wins the game!");
            break;
        }
    }

}

game();