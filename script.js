const computerPoints = document.getElementById('computerScore');
const playerPoints = document.getElementById('playerScore');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

let playerScore = 0;
let computerScore = 0;

function winner() {
    
}

function computerPick() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "PAPER"
        case 1:
            return "ROCK"
        case 2:
            return "SICSSOR";
    }
}

    rockBtn.addEventListener('click', () => handleClick('ROCK'))
    paperBtn.addEventListener('click', () => handleClick('PAPER'))
    scissorBtn.addEventListener('click', () => handleClick('SCISSOR'))

    function roundCompare(playerChoice, computerChoice) {
        if(playerChoice == 'ROCK') {
            switch (computerChoice) {
                case 'ROCK':
                    return 0;
                case 'PAPER':
                    return -1;
                case 'SCISSOR':
                    return 1;
            }
        }
        if(playerChoice == 'PAPER') {
            switch (computerChoice) {
                case 'ROCK':
                    return 1;
                case 'PAPER':
                    return 0;
                case 'SCISSOR':
                    return -1;
            }
        }
        if(playerChoice == 'SCISSOR') {
            switch (computerChoice) {
                case 'ROCK':
                    return -1;
                case 'PAPER':
                    return 1;
                case 'SCISSOR':
                    return 0;
            }
        }
    }

    function handleClick(playerChoice) {
        let computerChoice = computerPick();
        switch(roundCompare(playerChoice, computerChoice)) {
            case 1: 
                playerScore++;
                playerPoints.textContent = `Player: ${playerScore}`;
                break;
            case 0:
                computerScore++;
                computerPoints.textContent = `Computer: ${computerScore}`;
                break;
        }
    }