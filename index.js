//creating random numbers
var n1 = Math.floor(Math.random()*6)+1;
var n2 = Math.floor(Math.random()*6)+1;

//creating random dice image number
var i1 = n1+".png";
var i2 = n2+".png";

//creating random dice image source
var s1 = "images/"+i1;
var s2 = "images/"+i2;

//creating random dice
var d1 = document.querySelectorAll("img")[0];
var d2 = document.querySelectorAll("img")[1];

//setting random dices
d1.setAttribute("src",s1);
d2.setAttribute("src",s2);

if(n1>n2){
    document.querySelector("h1").innerHTML="Player1 wins!!!";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player2 wins!!!";
}
else{
    document.querySelector("h1").innerHTML="Ooops Nobody wins!!!";
}