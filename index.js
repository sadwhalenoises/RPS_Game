let humanScore = 0;
let ComputerScore = 0;
let computer = [
    "rock",
    "paper",
    "scissors"
]
let computerChoice;

let win = [
    "Hurray! You won this round!",
    "Wow you're doing great!",
    "Congrats on the win this round!",
    "Looking great there champ!",
    "Another win for mankind!",
    "You got this in the bag!"
];
let lost = [
    "Don't give up just yet!",
    "Looks like the Robot wins this round!",
    "Robot wins!",
    "Beep-Boop!",
    "Robot takes this round!"

]


function rockSelection(){
    
    computerChoice = computerRandom();
    if(computerChoice === "scissors"){
        humanScore++;
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("textOutput").innerHTML = winRandom();
    } else if(computerChoice === "paper"){
        ComputerScore++;
        document.getElementById("computerScore").innerHTML = ComputerScore;
        document.getElementById("textOutput").innerHTML = lostRandom();
    }else{
        document.getElementById("textOutput").innerHTML = "Draw!";
    }
    checkForWinner();
    console.log(ComputerScore);
    console.log(humanScore);
}

function paperSelection(){
    computerChoice = computerRandom();
    if(computerChoice === "rock"){
        humanScore++;
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("textOutput").innerHTML = winRandom();
    } else if(computerChoice === "scissors"){
        ComputerScore++
        document.getElementById("computerScore").innerHTML = ComputerScore;
        document.getElementById("textOutput").innerHTML = lostRandom();
    }else{
        document.getElementById("textOutput").innerHTML = "Draw!"
    }
    checkForWinner();
}

function scissorsSelection(){
    computerChoice = computerRandom();
    if(computerChoice === "paper"){
        humanScore++;
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("textOutput").innerHTML = winRandom();
    } else if(computerChoice === "rock"){
        ComputerScore++
        document.getElementById("computerScore").innerHTML = ComputerScore;
        document.getElementById("textOutput").innerHTML = lostRandom();
    }else{
        document.getElementById("textOutput").innerHTML = "Draw!"
    }
    checkForWinner();
}

function computerRandom(){
    return computer[Math.floor((Math.random() * 3))];
}

function winRandom(){
    return win[Math.floor((Math.random() * 6))];
}

function lostRandom(){
    return lost[Math.floor((Math.random() * 5))];
}

function checkForWinner(){
    if(humanScore >= 5){
        humanScore = 0;
        ComputerScore = 0;
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("computerScore").innerHTML = ComputerScore;
        window.alert("You win! Click Ok to play again.");
    }else if(ComputerScore >= 5){
        humanScore = 0;
        ComputerScore = 0;
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("computerScore").innerHTML = ComputerScore;
        window.alert("You lose! Click Ok to try again.");
    }
}


