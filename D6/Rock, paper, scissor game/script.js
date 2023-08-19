//All Function Calling here
const totalScore={playerscore:0,computerscore:0}

function onClickRPS(playerChoice) {
    

    console.log(playerChoice)
    const computer = computerChoice();
    console.log(computer)
    scor = checkWin(playerChoice, computer)
    totalScore['playerscore']+=scor
    totalScore['computerscore']-=scor
    playerscores.innerText=`Player Score: ${totalScore['playerscore']} and Computer Score: ${totalScore['computerscore']}`
    hands.innerText='Player: '+ playerChoice +' and '+'Computer: '+ computer
    showResult(scor, playerChoice, computer)

}

//DOM: Show Result

function showResult(gameResult) {
    if (gameResult == 0) {
        result.innerText = `Draw!!`
    } else if (gameResult == 1) {
        result.innerText = `Player Win!!`
    } else {
        result.innerText = `Computer Win!!`
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


//Reset Game
function endGame(){
    result.innerText=null
    hands.innerText=null
    playerscores.innerText=null
    totalScore['computerscore']=0
    totalScore['playerscore']=0
}
userClicked()


