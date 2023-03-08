var zoneButtons=document.querySelectorAll(".zone-button"); 
var playerOne=document.querySelector("#player-one-header");
var playerTwo=document.querySelector("#player-two-header");
var gameField=document.querySelector(".game-field");
var showResult=document.querySelector(".show-result");
var score1Text=document.querySelector(".score-text-1");
var score2Text=document.querySelector(".score-text-2");


var sayac=1;

function changePlayer(element){
          
    if(sayac%2==1){
        playerOneOperations(element);    
            
    }else if(sayac%2==0){
        playerTwoOperations(element);    
            
    } 

    sayac++;
    win1();   
    win2();  
    if(sayac==10){
        draw();
    }
}


function playerOneOperations(element){
    element.textContent="O"
    element.classList.add("selectedO");
    element.disabled=true;    
    gameField.style.background="linear-gradient(270deg, #00a884 0%, #252A34 3%)";
}

function playerTwoOperations(element){
    element.textContent="X"
    element.classList.add("selectedX");
    element.disabled=true;    
    gameField.style.background="linear-gradient(90deg, #00a884 0%, #252A34 3%)";               
  
    
}

function reset(){
    for(eleman of zoneButtons){
        eleman.textContent="";
        eleman.classList.remove("selectedX")
        eleman.classList.remove("selectedO");
        eleman.disabled=false;
            
    }
    sayac=1;
    gameField.style.background="linear-gradient(90deg, #00a884 0%, #252A34 3%)";
}

score1=0;
score2=0;
function win1(){
     if(zoneButtons[0].classList.contains("selectedO") && zoneButtons[1].classList.contains("selectedO") && zoneButtons[2].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[3].classList.contains("selectedO") && zoneButtons[4].classList.contains("selectedO") && zoneButtons[5].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[6].classList.contains("selectedO") && zoneButtons[7].classList.contains("selectedO") && zoneButtons[8].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[0].classList.contains("selectedO") && zoneButtons[3].classList.contains("selectedO") && zoneButtons[6].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[1].classList.contains("selectedO") && zoneButtons[4].classList.contains("selectedO") && zoneButtons[7].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[2].classList.contains("selectedO") && zoneButtons[5].classList.contains("selectedO") && zoneButtons[8].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[0].classList.contains("selectedO") && zoneButtons[4].classList.contains("selectedO") && zoneButtons[8].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }else if(zoneButtons[2].classList.contains("selectedO") && zoneButtons[4].classList.contains("selectedO") && zoneButtons[6].classList.contains("selectedO")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 1 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score1+=1;
        score1Text.textContent=score1;
        reset();
    }
}

function win2(){
   
    if(zoneButtons[0].classList.contains("selectedX") && zoneButtons[1].classList.contains("selectedX") && zoneButtons[2].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[3].classList.contains("selectedX") && zoneButtons[4].classList.contains("selectedX") && zoneButtons[5].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[6].classList.contains("selectedX") && zoneButtons[7].classList.contains("selectedX") && zoneButtons[8].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[0].classList.contains("selectedX") && zoneButtons[3].classList.contains("selectedX") && zoneButtons[6].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[1].classList.contains("selectedX") && zoneButtons[4].classList.contains("selectedX") && zoneButtons[7].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[2].classList.contains("selectedX") && zoneButtons[5].classList.contains("selectedX") && zoneButtons[8].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[0].classList.contains("selectedX") && zoneButtons[4].classList.contains("selectedX") && zoneButtons[8].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }else if(zoneButtons[2].classList.contains("selectedX") && zoneButtons[4].classList.contains("selectedX") && zoneButtons[6].classList.contains("selectedX")){
        showResult.classList.remove("hide");
        showResult.textContent="Kullanıcı 2 Kazandı"
        winnerTimeOut=setTimeout(() => {
            showResult.classList.add("hide");
        }, 3000);
        score2+=1;
        score2Text.textContent=score2;
        reset();
    }
    
}

function draw(){
    showResult.classList.remove("hide");
    showResult.textContent="Berabere";
    winnerTimeOut=setTimeout(() => {
        showResult.classList.add("hide");
    }, 3000);
    reset();
}

function restart(){
    reset();
    score1Text.textContent="0";
    score2Text.textContent="0";
    score1=0;
    score2=0;
}