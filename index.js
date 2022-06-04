
/*
let getChoice = () => {
    let playerChoice = prompt("Pick either Rock, Paper, or Scissors");
    if (playerChoice != "Rock" || "Paper" || "Scissors"){
        alert("Please Enter either Rock, Paper, or Scissors");
        getChoice();
    }
    console.log(playerChoice);
    return playerChoice;
};
getChoice();

let computerChoice = () =>{
    let choice = [1,2,3];
    return choice[Math.floor((Math.random() * 2))];
}

function Outcome(player, computer) {
    
}

*/

let humanScore = document.getElementById("humanScore");
let ComputerScore = document.getElementById("computerScore");
let textOutput = document.getElementsByClassName("status");
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
    computerChoice = computer[computerRandom()];
    if(computerChoice === "scissors"){
        humanScore.innerHTML += 1;
        textOutput.innerHTML = win[winRandom()]
    } else if(computerChoice === "paper"){
        computerChoice.innerHTML += 1;
        textOutput.innerHTML = lost[lostRandom()]
    }else{
        textOutput.innerHTML = "Draw!"
    }
}

function paperSelection(){
    computerChoice = computer[computerRandom()];
    if(computerChoice === "rock"){
        humanScore.innerHTML += 1;
        textOutput.innerHTML = win[winRandom()]
    } else if(computerChoice === "scissors"){
        computerChoice.innerHTML += 1;
        textOutput.innerHTML = lost[lostRandom()]
    }else{
        textOutput.innerHTML = "Draw!"
    }
}

function scissorsSelection(){
    computerChoice = computer[computerRandom()];
    if(computerChoice === "paper"){
        humanScore.innerHTML += 1;
        textOutput.innerHTML = win[winRandom()]
    } else if(computerChoice === "rock"){
        computerChoice.innerHTML += 1;
        textOutput.innerHTML = lost[lostRandom()]
    }else{
        textOutput.innerHTML = "Draw!"
    }
}

function computerRandom(){
    return computer[Math.floor((Math.random() * 2))];
}

function winRandom(){
    return win[Math.floor((Math.random() * 6) + 1 )];
}

function lostRandom(){
    return lost[Math.floor((Math.random() * 5) + 1 )];
}


