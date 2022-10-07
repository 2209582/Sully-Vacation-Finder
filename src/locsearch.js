const locations = require("./index.js");

let loc0 = document.getElementById("loc0");
let loc1 = document.getElementById("loc1");
let loc2 = document.getElementById("loc2");
let locTexts = [loc0, loc1, loc2];

let img0 = document.getElementById("img0");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let locImgs = [img0, img1, img2];

const locSelect = document.getElementById("categoryDropdown");
let selectVal = "placeholder";
let locText = document.getElementById("locText");
const locSearchButton = document.getElementById("locSearchButton");
const randLocSearchButton = document.getElementById("randLocSearchButton");

let cheapLocs = [];
let cheapImgs = [];
for (let i = 0; i < locations.cheapIndices.length; i++) {
  cheapLocs.push(locations.locs[locations.cheapIndices[i]]);
  cheapImgs.push(locations.imgSrcs[locations.cheapIndices[i]]);
}
let historicalLocs = [];
let historicalImgs = [];
for (let i = 0; i < locations.historicalIndices.length; i++) {
  historicalLocs.push(locations.locs[locations.historicalIndices[i]]);
  historicalImgs.push(locations.imgSrcs[locations.historicalIndices[i]]);
}

let lakeLocs = [];
let lakeImgs = [];
for (let i = 0; i < locations.lakeIndices.length; i++) {
  lakeLocs.push(locations.locs[locations.lakeIndices[i]]);
  lakeImgs.push(locations.imgSrcs[locations.lakeIndices[i]]);
}
let familyLocs = [];
let familyImgs = [];
for (let i = 0; i < locations.familyIndices.length; i++) {
  familyLocs.push(locations.locs[locations.familyIndices[i]]);
  familyImgs.push(locations.imgSrcs[locations.familyIndices[i]]);
}

let currCategory = [];
let currImgs = [];
setInterval(() => {
  if (locSelect && locText) {
    selectVal = locSelect.value;
    switch (selectVal) {
      case "Cheap":
        currCategory = cheapLocs;
        currImgs = cheapImgs;
        break;
      case "Historical":
        currCategory = historicalLocs;
        currImgs = historicalImgs;
        break;
      case "Lakes/Glaciers":
        currCategory = lakeLocs;
        currImgs = lakeImgs;
        break;
      case "Fun for the Family":
        currCategory = familyLocs;
        currImgs = familyImgs;
        break;
      default:
        currCategory = "error";
        break;
    }
  }
}, 500);

locSearchButton.addEventListener("click", () => {
  locText.textContent = `Places in category: ${selectVal}`;
  for (let i = 0; i < 3; i++) {
    if (locTexts[i] && locImgs[i]) {
      locTexts[i].textContent = currCategory[i];
      locImgs[i].src = currImgs[i];
    }
  }
});

randLocSearchButton.addEventListener("click", () => {
  locText.textContent = `Random Place in category: ${selectVal}`;

  if (locTexts[0] && locImgs[0]) {
    for (let i = 1; i < 3; i++) {
      locTexts[i].textContent = "";
      locImgs[i].src = "";
    }
    const randNum = Math.floor(Math.random() * 3);
    locTexts[0].textContent = currCategory[randNum];
    locImgs[0].src = currImgs[randNum];
  }
});
