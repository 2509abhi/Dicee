var randomnumber1 = Math.floor(Math.random()*6);
var randomnumber2 = Math.floor(Math.random()*6);
document.querySelectorAll(".img1")[randomnumber1].style.display = "block";
document.querySelectorAll(".img2")[randomnumber2].style.display = "block";
if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";

}
else if(randomnumber2 > randomnumber1)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    
}
else{
    document.querySelector("h1").innerHTML = "Draw!";

}