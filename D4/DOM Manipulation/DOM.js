//Checking Connection
console.log('Hello World')

//Printing HTML Text in Console
let tit = document.getElementById('title')
console.log('Before:', tit.innerText)

//Changing HTML Text from JS
let message = "के छ खबर?"
title.innerText = message;
console.log('After:', tit.innerText)

//Style from JS
console.log("Before's Color:", title.style.color)

title.style.color = 'yellow' //changed colour to yellow

console.log("After's Color:", title.style.color)

let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

let colorDiv = document.querySelectorAll('.colorSquare')
// console.log(colorDiv)

// console.log(colorDiv[0].value)
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }

colorDiv.forEach(color => {
    
    color.onclick = () => {
        timesClicked[color.value] += 1
        color.innerText = timesClicked[color.value]
        if (color.value == "red") {
            messages.innerText = "Color is Red"
        } else if (color.value == "yellow") {
            messages.innerText = "Color is Yellow"
        } else {
            messages.innerText = "Color is Green"
        }

    }
});


function clearCount() {
    timesClicked.red = 0
    timesClicked.yellow = 0
    timesClicked.green = 0

    colorDiv.forEach(color => {
        color.innerText = 0

    })
}

let clicked= document.getElementById("clear")

clicked.onclick= () => clearCount();









// redDiv.onclick = () => alert("Clicked Red")
// yellowDiv.onclick = () => alert("Clicked Yellow")
// greenDiv.onclick = () => alert("Clicked Green")