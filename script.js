lText= document.getElementById("lText");
rText= document.getElementById("rText");
lColor= document.querySelector(".left");
rColor= document.querySelector(".right");
uText = document.querySelector("#uText")
let computerMove;
let pMove;
const rockEmoji = '✊'; // Rock
const paperEmoji = '🤚'; // Paper
const scissorsEmoji = '✌️'; // scissors
function computerPick()
{
    var pick = Math.random();
    if(pick>=0 && pick<1/3)
{
    computerMove = "rock"
}
    else if(pick>=1/3 && pick<2/3)
{
    computerMove = "paper";
}
    else if(pick>=2/3 && pick<1)
    computerMove = "scissors";
}
function rock()
{
    pMove= rockEmoji;
    computerPick();
    if(computerMove == "rock")
{
    draw();
}
    else if(computerMove=="paper")
{
    lose();
}
    else if(computerMove=="scissors")
{
    win();
}
console.log(computerMove);
}
function paper()
{
    pMove= paperEmoji;
    computerPick();
    if(computerMove == "rock")
{
    win()
}
    else if(computerMove=="paper")
{
    draw()
}
    else if(computerMove=="scissors")
{
    lose()
}
console.log(computerMove);
}
function scissors()
{
    pMove=scissorsEmoji;
    computerPick();
    if(computerMove == "rock")
{
    lose();
}
    else if(computerMove=="paper")
{
    win()
}
    else if(computerMove=="scissors")
{
    draw()
}
}
function win(){
    lColor.style.backgroundColor='green';
    rColor.style.backgroundColor='red';
    if(computerMove=='rock')
        {
            computerMove=rockEmoji;
        }
        else if(computerMove=='paper')
        {
            computerMove= paperEmoji;
        }
        else if(computerMove=='scissors')
        {
            computerMove= scissorsEmoji;
        }
    rText.innerText= computerMove.toUpperCase();
    lText.innerText= pMove;
    uText.innerText="YOU WIN"
   
    }
function lose(){
    lColor.style.backgroundColor='red';
    if(computerMove=='rock')
        {
            computerMove=rockEmoji;
        }
        else if(computerMove=='paper')
        {
            computerMove= paperEmoji;
        }
        else if(computerMove=='scissors')
        {
            computerMove= scissorsEmoji;
        }
    rColor.style.backgroundColor='green';
    rText.innerText= computerMove.toUpperCase();
    lText.innerText= pMove;
    uText.innerText="YOU LOSE"
    


}
function draw()
{
    lColor.style.backgroundColor='yellow';
    rColor.style.backgroundColor='yellow';
    lText.innerText= pMove;
    if(computerMove=='rock')
    {
        computerMove=rockEmoji;
    }
    else if(computerMove=='paper')
    {
        computerMove= paperEmoji;
    }
    else if(computerMove=='scissors')
    {
        computerMove= scissorsEmoji;
    }
    rText.innerText= computerMove;
    uText.innerText="IT'S A DRAW"
    




}
