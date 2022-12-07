let playerScore = 0;
let computerScore = 0;

function welcome() {
    let playerName = prompt("Welcome to the Rock-Paper-Scissors game! What is your name?");
    player = playerName?.toLowerCase().trim() || '';
    if (player) {
        alert(`\nHello ${player}!\n\nHere are the rules:\n1. Rock beats Scissors, Scissors beats Paper, Paper beats Rock.\n2. The computer will wait until you input a valid answer.\n\nSo, Let's play!`);
        game();   
    } else if (player === null || player === ''){
        answer2 = prompt("You didn't enter your name :(\nAre you sure you don't want to play?\n\nPlease enter your name to play otherwise the program will end.");
        if (answer2) {
            alert(`\nHello ${answer2}!\n\nHere are the rules:\n1. Rock beats Scissors, Scissors beats Paper, Paper beats Rock.\n2. The computer will wait until you input a valid answer.\n\nSo, Let's play!`);
            game();
        } // } else if (player === null || player === ''){
        alert("Okay, see you next time!");
        }
    }
// }

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);   
    if (computerSelection === 0) {
        computerSelection = "rock";
    } else if (computerSelection === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function playerPlay() {
    const playerAnswer = prompt("Enter your choice: rock, paper or scissors?");
    playerSelection = playerAnswer?.toLowerCase().trim();
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("You did not enter a valid option. Please try again.");
        playerPlay();
    } else if  (playerSelection === null) {
        alert("You did not enter a valid option. Please try again.");
        playerPlay();
    } 
    return playerSelection;
}

function playRound(answer1, answer2) {
    if (answer1 == answer2){
        return("It's a tie for this round!");
    }
    if(answer1 == "rock"){
        if(answer2 == "scissors"){
            playerScore++;
            return("You win! Rock beats Scissors");
        }
        else{
            computerScore++;
            return("Computer wins! Paper beats Rock");
        }
    }
    if(answer1 == "paper"){
        if(answer2 == "rock"){
            playerScore++;
            return ("You win! Paper beats Rock");
        }
        else {
            computerScore++;
            return ("Computer wins! Scissors beats Paper");
        }
    }
    if(answer1 == "scissors"){
        if(answer2 == "paper"){
            playerScore++;
            return ("You win! Scissors beats Paper");
        }
        else {
            computerScore++;
            return ("Computer wins! Rock beats Scissors");
        }
    }
}

function game() {
    for (let i = 1; i < 6; i++) {
        console.log("\n------ROUND" + " " + i + "------\n");
        const userChoice = playerPlay();
        const computerChoice = computerPlay();     
        console.log("You chose" + " " + userChoice);        
        console.log("The computer chose" + " " + computerChoice);
        console.log("\n" + playRound(userChoice, computerChoice));
        console.log("\n -----SCOREBOARD-----" + "\n| You     :" + playerScore + "         |\n"+ "| Computer:" + computerScore + "         |\n --------------------");
    }
    revealWinner();
}

function revealWinner() {
    if (playerScore > computerScore){
        console.log("----------------------------\nCongratulations! You win!\n----------------------------")
        alert("\nCongratulations! You win!\n\n Thanks for playing!")
    }
    else if (playerScore < computerScore){
        console.log("--------------------------------------\nComputer wins! Better Luck Next Time :)\n--------------------------------------");
        alert("\nComputer wins! Better Luck Next Time :)\n\n Thanks for playing!")
    }
    else if (playerScore === 0 && computerScore === 0){
        console.log("------------------------------------------\nSorry no one is interested to play! :(\n------------------------------------------");
        alert("\nSorry no one is interested to play! :(")
    }
    else {
        console.log("---------------------\nWow it's a tie!\n---------------------")
        alert("\nWow it's a tie!\n\n Thanks for playing!")
    }
}
            
welcome();