var snareImg = document.getElementById("snareImg")
var kickImg = document.getElementById("kickImg")
var hatImg = document.getElementById("hatImg")
var hat2Img = document.getElementById("hat2Img")
var crashImg = document.getElementById("crashImg")
var cowbellImg = document.getElementById("cowbellImg");

var kickSound = new Audio("sounds/kick.wav")
var snareSound = new Audio("sounds/snare.wav")
var hatSound = new Audio("sounds/hat1.wav")
var hat2Sound = new Audio("sounds/hat2.wav")
var crashSound = new Audio("sounds/crash.wav")
var cowbellSound = new Audio("sounds/cow.wav")

cowbellImg.addEventListener("click", e => {
    playCow();
})
function playCow() {
    if (cowbellSound.paused) {
        cowbellSound.play();
    }else{
        cowbellSound.currentTime = 0
    }
}


kickImg.addEventListener("click", e => {
 playKick()
})
function playKick() {
    if (kickSound.paused) {
        kickSound.play();
    }else{
        kickSound.currentTime = 0
    }
}

snareImg.addEventListener("click", e => {
 playSnare()
})
function playSnare() {
    if (snareSound.paused) {
        snareSound.play();
    }else{
        snareSound.currentTime = 0
    }
}

hatImg.addEventListener("click", e => {
    playHat1();
})
function playHat1(){
    if (hatSound.paused) {
        hatSound.play();
    }else{
        hatSound.currentTime = 0
    }
}

hat2Img.addEventListener("click", e => {
    playHat2()
})
function playHat2() {
    if (hat2Sound.paused) {
        hat2Sound.play();
    }else{
        hat2Sound.currentTime = 0
    }
}

crashImg.addEventListener("click", e => {
    playCrash()
})
function playCrash() {
    if (crashSound.paused) {
        crashSound.play();
    }else{
        crashSound.currentTime = 0
    }
}

document.onkeydown = function(e) {
    if (e.key === "a"){
        playCow()
    }
    if (e.key === "d")
    {
        playKick()
    }
    if (e.key === "s") {
        playSnare()
    }
    if (e.key === "j"){
        playHat1();
    }
    if (e.key === "k"){
        playHat2();
    }
    if (e.key === "l"){
        playCrash();
    }
}