
function random_function(){
    var rand = (Math.random()*6)+1;
    return Math.floor(rand);
}


// player 1
var randomNumber1 = random_function();
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png")
console.log(randomNumber1);

// player 2
var randomNumber2 = random_function();
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png")

// winner| loser | draw
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins 🏆";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🏆";
}else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw 🏳️";
}