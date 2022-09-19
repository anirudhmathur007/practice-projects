function setRandomNumber(){
    return Math.floor(Math.random()*20)+1;
}
function restart(){
    score=20;
    randomNumber=setRandomNumber();
    console.log(randomNumber);
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.number').innerHTML="?";
    document.querySelector('body').style.background="#222";
    document.querySelector('.message').innerHTML="Start guessing...";
    document.querySelector('.number').style.width="15rem";
}
function printscore(score,messagess,highs){
    document.querySelector('.score').innerHTML=score;
    document.querySelector('.message').innerHTML=messagess;
    document.querySelector('.highscore').innerHTML=highs;
    document.querySelector('.guess').value='';
}
let randomNumber,score,highscore=0,message="";
restart();
document.querySelector('.check').addEventListener('click',
function()
{
    let checck=(document.querySelector('.guess').value)
    if(!checck || checck<0 || checck >20)
    {
        messagee="Incorrect Input 🎊🎊🎊";
    }
    else if(checck==randomNumber)
    {
        messagee="Correct Answer ✨✨✨";
        highscore=(score>highscore?score:highscore);
        document.querySelector('.number').innerHTML=randomNumber;
        document.querySelector('body').style.background="green";
        document.querySelector('.number').style.width="30rem";
        
    }
    else if(checck<randomNumber)
    {
        messagee="💀💀💀 Number Low";
        score--;
        
    }
    else if(checck>randomNumber){
        messagee="Number High 👀👀👀";
        score--;
    }
    if(score==0){
        restart();
        message="Score 0";







         
    }
    printscore(score,messagee,highscore);
}
);
document.querySelector('.again').addEventListener('click',
function()
{
    restart();
}
)

