const humanScoreSpan = document.getElementById('humanScore');
const computerScoreSpan = document.getElementById('computerScore');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const restartBtn = document.getElementById('restart-btn');

let humanScore = 0;
let computerScore = 0;

let roundCount = 0;
const resultsDiv = document.getElementById('results');
const finalResultsDiv = document.getElementById('finalResults');

function getComputerChoice() {
    
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0){
        return "камень" 
    } else if (randomNumber === 1){
        return "ножницы"
    } else{
        return "бумага"
    }
}

rockBtn.addEventListener('click', () => {
    playRound("камень", getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound("бумага", getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound("ножницы", getComputerChoice());
});

restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;

    humanScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
    resultsDiv.textContent = '';
    finalResultsDiv.textContent = '';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

    restartBtn.style.display = 'none';
})

function playRound(humanChoice, computerChoice){
    let resultMessage = "";

    if (humanChoice === computerChoice){
        resultMessage = `Ничья! вы оба выбрали: ${humanChoice}`;
    } else if (
        (humanChoice === "камень" && computerChoice === "ножницы") ||
        (humanChoice === "бумага" && computerChoice === "камень") ||
        (humanChoice === "ножницы" && computerChoice === "бумага")
    ){
        humanScore++
        resultMessage = `Вы выиграли! ${humanChoice} побеждает ${computerChoice}`
    } else {
        computerScore++
        resultMessage = `Компьютер выиграл! ${computerChoice} побеждает ${humanChoice}`
    }
    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
    resultsDiv.textContent = resultMessage;

    if (humanScore >= 5 || computerScore >= 5) {
        displayFinalResults();
    }

}


function displayFinalResults() {
    let finalMessage = "";
    if (humanScore >= 5) {
        finalMessage = `Игра окончена! Вы победили со счетом ${humanScore} на ${computerScore}!`;
    } else if (computerScore >= 5) {
        finalMessage = `Игра окончена! Компьютер победил со счетом ${computerScore} на ${humanScore}!`;
    }

    finalResultsDiv.textContent = finalMessage;
    finalResultsDiv.classList.add('show-final-results'); 

    
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    restartBtn.style.display = 'block';
}           