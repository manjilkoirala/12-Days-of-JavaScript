p1Div=document.getElementById('p1attack')
p1Heal=document.getElementById('p1heal')
p2Div=document.getElementById('p2attack')
p2Heal=document.getElementById('p2heal')
playDive= document.getElementById('play')



const updateGame = (p1,p2,gameState) => {
    p1Name.innerText=p1.name
    p2Name.innerText=p2.name
    p1Health.innerText=p1.health
    p2Health.innerText=p2.health
    if(p1.health<=0 || p2.health<=0){
        game.isOver=true
        gameState=game.isOver
        result.innerText=game.declareWinner(game.isOver,p1,p2)
        return gameState
    }
  
}


class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }
  // ** Attack an enemy with a random number from 0 to YOUR attackDmg bonus **
  strike (player, enemy) {
    let damage=Math.ceil(Math.random()*this.attackDmg)
    enemy.health-=damage
    updateGame(p1,p2,game.isOver)
    return `${player.name} attacks ${enemy.name} for ${damage} damage!`
    

  }

  // ** Heal the player for random number from  1 to 5 **
  heal (player) {
    let hpAmount=Math.ceil(Math.random()*5)
    player.health+=hpAmount
    updateGame(p1,p2,game.isOver)
    
  }
}

// ** Create the Game class with all it's attributes and methods to run a match **

class Game {
  constructor() {
    this.isOver = false;
  }

  // ** If the game is over and a player has 0 health declare the winner! **
  declareWinner(isOver,p1, p2) {
    let message;
    if(isOver==true && p1.health<=0){
        message=`${p2.name} WINS!`

    }else if(isOver==true && p2.health<=0){
        message=`${p1.name} WINS!`
    }
    
        document.getElementById('victory').play()
        return message
    
  }

  // ** Reset the players health back to it's original state and isOver to FALSE **
  reset(p1,p2) {
    p1.health=100
    p2.health=100
    game.isOver=false
    result.innerText=''
    updateGame(p1,p2,game.isOver)

  }
  
  // ** Simulates the whole match untill one player runs out of health **
  play(p1, p2) {
    this.reset(p1,p2)
     while (!this.isOver) {
        p1.strike(p1,p2)
        p2.heal(p2)
        p2.strike(p2,p1)
        p1.heal(p1)

    }
    
  }

}

// ** Create 2 players using the player class **

const player1= new Player('Manjil', 100,20)
const player2= new Player('Ram', 100,20)


// ** Save original Player Data into a variable in order to reset **
let p1=player1;
let p2=player2;

// ** Create the game object from the Game class **
let game =new Game()

// ** Intialize the game by calling updateGame() **

updateGame(p1,p2,game.isOver)


// ** Save intial isOver from the game object inside this variable **
let gameState;


// ** Add a click listener to the simulate button that runs the play() method on click and pass in the players **


// Add functionality where players can press a button to attack OR heal

// ** Player 1 Controls **
document.addEventListener('keydown', function(e) {
  // if you press Q AND the enemy health is greater than 0 AND isOver is still false then strike()
  if(e.key=='q' && p2.health>0 && game.isOver==false){
 // After striking then play attack sound
 p1.strike(p1,p2)
 p1Div.play()


  }
   

});

document.addEventListener('keydown', function(e) {

  if(e.key=='a' && p1.health<100 && game.isOver==false){
 // After striking then play attack sound
 p1.heal(p1)
 p1Heal.play()


  }
  
});

// ** Player 2 Controls **
document.addEventListener('keydown', function(e) {
    if(e.key=='p' && p1.health>0 && game.isOver==false){
        // After striking then play attack sound
        p2.strike(p2,p1)
        p2Div.play()
       
       
         }
          
   
});

document.addEventListener('keydown', function(e) {
  // if you press l AND the player health is greater than 0 AND isOver is still false then heal()

  if(e.key=='l' && p2.health<100 && game.isOver==false){
    // After striking then play attack sound
    p2.heal(p2)
    p2Heal.play()
   
   
     }

});






