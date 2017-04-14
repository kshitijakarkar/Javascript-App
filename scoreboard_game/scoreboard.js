var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");


var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");

var input = document.querySelector("#input");
var MaxScore = document.querySelector("#MaxScore");
var p1Value = 0;
var p2Value = 0;

var gameOver = false;
var winnigScore = 5;


p1Button.addEventListener("click", function(){

if(!gameOver)
{
p1Value++;
if(p1Value === winnigScore)
{
gameOver = true;
p1Score.classList.add("winner")
}
p1Score.textContent=p1Value;
}


});


p2Button.addEventListener("click", function(){

if(!gameOver)
{
p2Value++;
if(p2Value === winnigScore)
{
gameOver = true;
p2Score.classList.add("winner")
}
p2Score.textContent = p2Value;
}
});


resetButton.addEventListener("click",function(){
reset();
});

function reset() {
p1Value = 0;
p2Value = 0;
p1Score.textContent=p1Value;
p1Score.classList.remove("winner");

p2Score.textContent=p2Value;
p2Score.classList.remove("winner");
gameOver = false;
};

input.addEventListener("change", function(){
MaxScore.textContent = input.value;
winnigScore = Number(input.value);
reset();
});
