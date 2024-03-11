const rock = document.querySelector('#rock');
 const paper = document.querySelector('#paper');
 const scissors = document.querySelector('#scissors');
const play = document.querySelector('#play');
 const dspl = document.querySelector('#display');
 const yourScore = document.querySelector("#yourScore");
 const computerScore = document.querySelector("#computerScore");
 const start = document.querySelector("#start");
 const newgame = document.querySelector("#newgame");
 const currgame = document.querySelector('#currgame');
 currgame.textContent = 'This Match winner??';
let playerSelection='';
 let computerSelection='';
yourScore.textContent = '0';
 computerScore.textContent = '0';
 const options = ['rock','paper','scissors'];
 computerSelection = options[Math.floor(Math.random()*3)];
function clickEvents(e){
    if(dspl.textContent!="Winner??"){
        return;
    }
    const btn = e.target;
    switch(btn.id){
        case 'start':
            playerSelection='';
            computerSelection = options[Math.floor(Math.random()*3)];
            currgame.textContent='This match winner??';
            break;
        case "rock":
            playerSelection='rock';
            break;
        case 'paper':
            playerSelection='paper';
            break;
        case 'scissors':
            playerSelection='scissors';
            break;
        case 'play':
            playRound(playerSelection,computerSelection);
            playerSelection='';
            computerSelection='';
    }
}
function playRound(playerSelection,computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            currgame.textContent='computer'
        }
        else if(computerSelection == 'scissors'){
            yourScore.textContent = parseInt(yourScore.textContent)+1;
            currgame.textContent='You'
        }
        else if(computerSelection == playerSelection)
        currgame.textContent= 'match draw';
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            yourScore.textContent = parseInt(yourScore.textContent)+1;
            currgame.textContent='You'
        }
        else if(computerSelection == 'scissors'){
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            currgame.textContent='computer';
        }
        else if(computerSelection == playerSelection)
        currgame.textContent='match draw';
    }
    else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock'){
            computerScore.textContent = parseInt(computerScore.textContent)+1;
            currgame.textContent='computer';
        }
        else if(computerSelection=='paper'){
            yourScore.textContent = parseInt(yourScore.textContent)+1;
            currgame.textContent='You';
        }
        else if(computerSelection == playerSelection)
        currgame.textContent='match draw';
    }
    if(parseInt(computerScore.textContent)==5){
        dspl.textContent = 'computer won the game';

    }
    if(parseInt(yourScore.textContent)==5){
        dspl.textContent = 'You won the game';
        
    }
}
rock.addEventListener("click",(event)=>clickEvents(event));
paper.addEventListener("click",(event)=>clickEvents(event));
scissors.addEventListener("click",(event)=>clickEvents(event));
play.addEventListener("click",(event)=>clickEvents(event));
start.addEventListener("click",(event)=>clickEvents(event));
newgame.addEventListener("click",()=>{
    computerSelection = options[Math.floor(Math.random()*3)];
    playerSelection='';
    yourScore.textContent = '0';
    computerScore.textContent = '0';
    dspl.textContent='Winner??';
    currgame.textContent="This match winner??";
})