var randNum1 = Math.floor(Math.random()*6)+1
var randNum2 = Math.floor(Math.random()*6)+1
//console.log(randNum1)
//console.log(randNum2)

var dice1Image = document.querySelectorAll("img")[0]
var dice2Image = document.querySelectorAll("img")[1]
var h1Winner = document.querySelector("h1")
//console.log(dice1Image)

var imgNameArray = ["dice1","dice2","dice3","dice4","dice5","dice6"]

for (let i=0;i<imgNameArray.length;i++){
    if (imgNameArray[i].includes(randNum1)){
        dice1Image.setAttribute("src", "images/"+imgNameArray[i]+".png")
    }
    if (imgNameArray[i].includes(randNum2)){
        dice2Image.setAttribute("src", "images/"+imgNameArray[i]+".png")
    }
}

if (randNum1 == randNum2){
    h1Winner.innerText = "Draw"
} else if (randNum1 > randNum2){
    h1Winner.innerText = "🚩Player 1 Wins!"
} else {
    h1Winner.innerText = "Player 2 Wins!🚩"
}