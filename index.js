// Establish variables that can be manipulated

const slide = document.getElementById("videos");
const vidCon = document.getElementById("videoContainer");
const crack = document.getElementById("crack");
const T = document.getElementById("T");
const Y = document.getElementById("Y");
const clock = document.getElementById("clock");
const Raise = document.getElementById("Raise");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const explain = document.getElementById("explain");

let counter = 0;
// Set size for translation of carousel
const size = vidCon.clientWidth;

// Text to be used as explanations for videos
const crackText = "Welcome to the home boulder wall! Power training is important - you should find a climb that has an early crux (difficult movement) that you can't quite execute. I've spent time on this problem and so I'm able to execute fairly consistently now. At the start this was not the case. Always aim to work harder movements in each training cycle.";
const tText = "The purpose of this movement is to help build core tension and shoulder stability. It is important to keep the arms relatively straight and lower into the T position before returning to upper plank. The difficulty can be adjusted by making the angle less steep. ";
const yText = "The purpose of this movement is similar to the T in that it promotes core and shoulder stability. I find this movement to be much more focused on core however. Be careful not to start at too steep an angle as this movement can be bad for the lower back if done improperly. Move the arms out to the Y position before returning to high plank.";
const clockText = "Like the T and Y, this movement promotes shoulder stability and helps the climbers transmit tension from their lower body up through the upper body. Arms should extend to 10:00 and 4:00, and then from 2:00 to 8:00, as shown in the clip.";
const raiseText = "This movement helps with overhanging terrain. If the climber's feet slip or the climber needs to cut feet and reposition, then training these muscles are critical to getting feet back on the wall. If the straight leg movement is too hard, start doing these with bent knees. Progress from there to straight legs. Then progress from there to bringing your toes to the bar.";

//Event listeners

next.addEventListener("click", moveRight);
prev.addEventListener("click", moveLeft);

// Functions for moving carousel left or right, also changes text box on click
function moveRight() {
    if (counter >= 4) {
        counter === 4;
    }
    else {
        counter++;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    setText();  
}

function moveLeft() {
    if (counter <= 0) {
        counter === 0;
    }
    else {
        counter--;
        slide.style.transform = "translateX(" + (-size * counter) + "px)";
    }
    setText();
}

//Sets the explanation for the video when previous or next is clicked, called during moveRight and moveLeft
function setText() {
    if (counter === 0) {
        explain.innerText = crackText;
    } 
    else if (counter === 1) {
        explain.innerText = tText;
    }
    else if (counter === 2){
        explain.innerText = yText;
    }
    else if (counter === 3) {
        explain.innerText = clockText;
    }
    else {
        explain.innerText = raiseText;
    }
}