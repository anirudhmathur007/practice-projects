
    

let randomNumber1=Math.floor((Math.random()*6)+1);
let randomNumber2=Math.floor((Math.random()*6)+1);
let image_one="./images/dice"+randomNumber1+".png";
let image_two="./images/dice"+randomNumber2+".png";
const image1=document.querySelector(".img1").src=image_one;
const image2=document.querySelector(".img2").src=image_two;
var hww=""
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!!"

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Player1 wins!"
}

