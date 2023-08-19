//All Function Calling here

function onClickRPS(playerChoice) {
    console.log(playerChoice)
    const computer = computerChoice();
    console.log(computer)
    scor = checkWin(playerChoice, computer)
    showResult(scor, playerChoice, computer)

}

//DOM: Show Result

function showResult(gameResult, player, computer) {
    if (gameResult == 0) {
        result.innerText = `Draw
        Player choose: ${player}, Computer choose: ${computer}`
    } else if (gameResult == 1) {
        result.innerText = `Player Win
        Player choose: ${player}, Computer choose: ${computer}`
    } else {
        result.innerText = `Computer Loss
        Player choose: ${player}, Computer choose: ${computer}`
    }
}

//Calculater which option user clicked
function userClicked() {
    options = document.querySelectorAll('.rpsButton')
    options.forEach(opt => {

        opt.onclick = () => onClickRPS(opt.value)
    })
}



//Computer Choice(Random Generate)

function computerChoice() {
    choices = ['Rock', 'Paper', 'Scissors']
    randomNumber = Math.floor(Math.random() * 3)
    rpsChoice = choices[randomNumber]

    return rpsChoice
}


// Check Computer and User choice
function checkWin(user, computer) {
    let score;
    if (user == computer) {
        score = 0;

    } else if ((user == "Rock" && computer == "Scissors") || (user == "Scissors" && computer == "Paper") || (user == "Paper" && computer == "Rock")) {
        score = 1;
    } else {
        score = -1;
    }
    return score
}
userClicked()


