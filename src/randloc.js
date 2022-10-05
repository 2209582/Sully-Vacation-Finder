const locations = require("./index.js");

let randLocText = document.getElementById("randLocText");
let randLocImg = document.getElementById("randLocImg");

function genRandLoc() {
  const randNum = Math.floor(Math.random() * 9);
  if (randLocText && randLocImg) {
    randLocText.textContent = locations.locs[randNum];
    randLocImg.src = locations.imgSrcs[randNum];
  }
}
genRandLoc();
