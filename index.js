

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

