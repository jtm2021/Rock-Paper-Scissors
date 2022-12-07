let playerScore = 0;
let computerScore = 0;
let round = 1;

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
        }
        alert("Okay, see you next time!");
    }
}

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
    const playerAnswer = prompt(`Round ${round}!\n\nEnter your choice: rock, paper or scissors?`);
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

function scoreBOARD() {
    console.log("\n 🎊🎊SCOREBOARD🎊🎊" + "\n| You     :" + playerScore + "         |\n"+ "| Computer:" + computerScore + "         |\n --------------------");
}

function game() {
    for (round = 1; round < 6; round++) {
        console.log("\n------ROUND" + " " + round + "------\n");
        const userChoice = playerPlay();
        const computerChoice = computerPlay();     
        console.log("You chose" + " " + userChoice);        
        console.log("The computer chose" + " " + computerChoice);
        console.log("\n" + playRound(userChoice, computerChoice));
        scoreBOARD();
    }
    revealWinner();
}

function revealWinner() {
    if (playerScore > computerScore){
        console.log("\n\n----------------------------\nCongratulations! You win!\n----------------------------")
        scoreBOARD();
        alert("\n\nCongratulations! You win! 🎉🎉🎉\n\n Thanks for playing!")
    }
    else if (playerScore < computerScore){
        console.log("\n\n--------------------------------------\nComputer wins! Better Luck Next Time :)\n--------------------------------------");
        scoreBOARD();
        alert("\n\nComputer wins! Better Luck Next Time 😔😔😔\n\n Thanks for playing!")
    }
    else if (playerScore === 0 && computerScore === 0){
        console.log("\n\n------------------------------------------\nSorry no one is interested to play! :(\n------------------------------------------");
        scoreBOARD();
        alert("\n\nSorry no one is interested to play! 🤷🤷🤷")
    }
    else {
        console.log("\n\n---------------------\nWow it's a tie!\n---------------------")
        scoreBOARD();
        alert("\n\nWow it's a tie!\n\n Thanks for playing!")
    }
}
            
welcome();