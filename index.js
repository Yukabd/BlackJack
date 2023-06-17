var numbers = [];
var sum = 0;
var isAlive = false;
var hasBlackJack = false;

function getRandomNumber(){
    var randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber  }
    }


function startGame(){
    isAlive = true
    reset
}


function draw(){
    if (isAlive === true && hasBlackJack === false) {
    
        var firstCard = getRandomNumber();
        // var secondCard = getRandomNumber();
        
    
      var cardsEl = document.getElementById("cards-el");
      cardsEl.textContent += firstCard + " , " 
    numbers.push(firstCard)
    
    var sum = numbers.reduce((total, number) => total + number, 0);
    //   var sum = firstCard 
      var sumEl = document.getElementById("sum-el");
      sumEl.textContent += sum+"  " 

    if (sum<=20){
        var massageEl = document.getElementById("massage-el");
        massageEl.textContent =  "You can draw one more card";
        
      
    }
    else if (sum===21){
        var massageEl = document.getElementById("massage-el");
        massageEl.textContent =  "Congrats, You've got Blackjack 🎉  ";
         hasBlackJack = true;

    }else{
        var massageEl = document.getElementById("massage-el");
        massageEl.textContent =  "Maybe next time 😢 ";
         isAlive = false;
    }
}
}
function hold(){
    if (isAlive === true && hasBlackJack === false) {

}
}
