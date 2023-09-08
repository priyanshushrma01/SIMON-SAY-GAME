let gameseq = [];
let userseq = [];

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress",function (){
    if(started == false){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranbtn);
    gameseq.push(ranColor);
    console.log(gameseq);
    gameFlash(ranbtn);
}

function checkAns(idx) {
    // let idx = level - 1;//level == size of both arrays

    if(userseq[idx] === gameseq[idx]){
        if(userseq[idx] === gameseq[idx]){
            if(userseq.length == gameseq.length){
                setTimeout(levelUp,1000);
            }
        }
    }else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        highscore(level);
        reset();
    }
}
function btnpress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of  allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}