const locations = require("./index.js");

let randLocText = document.getElementById("randLocText");
let randLocImg = document.getElementById("randLocImg");

function genRandLoc() {
  const randNum = Math.floor(Math.random() * 8);
  if (randLocText) {
    randLocText.textContent = locations.locs[randNum];
    if (randLocImg) {
      randLocImg.src = locations.imgSrcs[randNum];
    }
  }
}
genRandLoc();
