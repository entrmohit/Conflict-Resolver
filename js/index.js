var r1=Math.floor(Math.random()*6)+1;
var random1="images/dice"+r1+".png";
var r2=Math.floor(Math.random()*6)+1;
var random2="https://entrmohit.github.io/Conflict-Resolver/images/dice"+r2+".png";
if(r1>r2){
  document.querySelector("h1").innerHTML="🚩 Player1 wins";
}
if(r2>r1){
  document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
if(r1==r2){
  document.querySelector("h1").innerHTML="🚩Both wins🚩";
}
document.querySelector(".img1").setAttribute("src",random1);
document.querySelector(".img2").setAttribute("src",random2);
