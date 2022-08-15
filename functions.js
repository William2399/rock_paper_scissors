//Generates a random choice for the computer
function getComputerChoice() {
    result = Math.floor(Math.random() * (3));
    if (result == 0) { return "rock"; }
    else if (result == 1) { return "paper"; }
    else { return "scissors"; }
}

//Determines the result of a round
function compareChoices(computer, user) {
    if (computer === user) { return "It is a tie!"; }
    else if ((computer === "rock" && user === "scissors")) { return "The computer wins!"; }
    else if ((user === "rock" && computer === "scissors")) { return "You win!"; }
    else if ((computer === "paper" && user === "rock")) { return "The computer wins!"; }
    else if ((user === "paper" && computer === "rock")) { return "You win!"; }
    else if ((computer === "scissors" && user === "paper")) { return "The computer wins!"; }
    else { return "You win!"; }
}

//Calculates the total score
function calculation(result) {
    if (result === "The computer wins!") { computer_score++; }
    else if (result === "You win!") { user_score++; }
    content1.textContent = "Computer Score: " + computer_score + " - " + "User Score: " + user_score; 
    if (computer_score == 5) { content.textContent = "The computer wins the game! Final Score is Computer: " + computer_score + " - " + "User: " + user_score; reset(); }
    else if (user_score == 5) { content.textContent = "The user wins the game! Final Score is Computer: " + computer_score + " - " + "User: " + user_score; reset(); }
}

//Resets the game
function reset(){
    computer_score = 0;
    user_score = 0;
    content1.textContent = "Computer Score: " + computer_score + " - " + "User Score: " + user_score; 
}

//Displays the round result
const round_result = document.querySelector('#round_result');
const content = document.createElement('div');
content.textContent = "Select your first choice to begin the game"
content.classList.add('content');
round_result.appendChild(content);


//Displays the current score
const scores = document.querySelector('#scores');
const content1 = document.createElement('div');
content1.classList.add('content1');
let computer_score = 0;
let user_score = 0;
content1.textContent = "Computer Score: " + computer_score + " - " + "User Score: " + user_score; 
scores.appendChild(content1);

//User Choice: Rock
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let result = compareChoices(getComputerChoice(), "rock");
    content.textContent = result;
    calculation(result);
})

//User Choice: Paper
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let result = compareChoices(getComputerChoice(), "paper");
    content.textContent = result;    
    calculation(result);
})

//User Choice: Scissors
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let result = compareChoices(getComputerChoice(), "scissors");
    content.textContent = result;    
    calculation(result);
})

