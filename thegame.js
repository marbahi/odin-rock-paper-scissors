// console.log("Hello World!");

// declare humanScore globally give value 0
let humanScore = 0;
// declare computerScore globally give value 0
let computerScore = 0;

// get computer choice funtion
// initialize variable choice
// using math.random function to result 0-2 in choice var
// if 0 return rock string
// if 1 return paper string
// if 2 return scissors string
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 100) % 3;
    // console.log(choice);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else if (choice == 2) {
        return "scissors";
    }
}
// console.log(getComputerChoice());

// get human choice function
// initialize variable named choice
// using prompt to get value
// make new variable, valued lowercase variable choice
function getHumanChoice() {
    let choice = prompt("Please input your choice (Rock, Paper, Scissors)");
    return choice.toLowerCase();
}
// console.log(getHumanChoice());

// create function playRound
// use parameter from computerChoice and humanChoice
// if humanChoice rock, computerChoice paper, return "You Lose!, Paper beats Rock"
// if humanChoice rock, computerChoice scissors, return "You Win!, Rock beats Scissors"
// if humanChoice Paper, computerChoice rock, return "You Win!, Paper beats Rock"
// if humanChoice Paper, computerChoice scissors, return "You Lose!, Scissors beats Paper"
// if humanChoice Scissors, computerChoice rock, return "You Lose!, Rock beats Scissors"
// if humanChoice Scissors, computerChoice paper, return "You Win!, Scissors beats Paper"
// if tie, return "It's Tie!"
// if human win humanScore +1
// if computer win computerScore +1
function playRound(computerChoice, humanChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You Lose!, Paper beats Rock";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You Win!, Rock beats Scissors";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You Win!, Paper beats Rock";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You Lose!, Scissors beats Paper";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You Lose!, Rock beats Scissors";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You Win!, Scissors beats Paper";
    } else {
        return "It's a Tie!"
    }
}

// create playGame function
// using loops init gameCount value 0 with condition gameCount < 5, and +1 every iteration
// make humanChoice variable to get value
// make computerChoice variable to get value
// input function playRound from result variable humanSelection and ComputerSelection
// display round, human score, and computer score

// function playGame() {
//     let humanSelection = "";
//     let computerSelection = "";
//     for(let gameCount = 1; gameCount <= 5; gameCount++) {
//         humanSelection = getHumanChoice();
//         computerSelection = getComputerChoice();
//         console.log("Human choice " + humanSelection + " | Computer choice " + computerSelection);
//         console.log(playRound(computerSelection, humanSelection));
//         console.log("Round " + gameCount + "\t Human: " + humanScore + " | Computer: " + computerScore);
//     }
// }
// console.log(playGame());

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");