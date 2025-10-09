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



function getHumanChoice() {
    let choice = prompt("Камень, ножницы или бумага")
    //choice = choice.trim().toLowerCase();
    if (choice === "камень" || choice === "ножницы" || choice === "бумага"){
        return choice.trim().toLowerCase()
    } else{
        return "Error"
    }
    
}



let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === computerChoice){
        console.log(`Ничья! вы оба выбрали: ${humanChoice}`)
    } else if (
        (humanChoice === "камень" && computerChoice === "ножницы") ||
        (humanChoice === "бумага" && computerChoice === "камень") ||
        (humanChoice === "ножницы" && computerChoice === "бумага")
    ){
        humanScore++
        console.log(`Вы выиграли! ${humanChoice} побеждает ${computerChoice}`)
    } else {
        computerScore++
        console.log(`Компьютер выиграл! ${computerChoice} побеждает ${humanChoice}`)
    }
    console.log(`Очки: ваши очки: ${humanScore}, очки компьютера: ${computerScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

for (let round = 1; round <= 5; round++) {
    console.log(`Раунд ${round}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

console.log("Финальные результаты")
if (humanScore > computerScore){
    console.log(`Вы выиграли! ваши очки: ${humanScore} очки компьютера: ${computerScore}`)
} else if(computerScore > humanScore) {
    console.log(`Компьютер победил! ваши очки: ${humanScore} очки компьютера: ${computerScore}`)
} else {
    console.log(`Ничья! ваши очки: ${humanScore} очки компьютера: ${computerScore}`)
}

            