let mission = document.getElementById("mission");
let hiddenText = document.getElementById("hidden-text");
let isClicked = false;

function showItem() {
  if (!isClicked) {
    hiddenText.style.display = "block";
    isClicked = true;
  } else {
    hiddenText.style.display = "none";
    isClicked = false;
  }
}

mission.addEventListener("mousedown", showItem);

let banner = document.getElementById("banner");
let hiddenText1 = document.getElementById("hidden-text1");
let isClicked1 = false;

function showItem1() {
  if (!isClicked1) {
    hiddenText1.style.display = "block";
    isClicked1 = true;
  } else {
    hiddenText1.style.display = "none";
    isClicked1 = false;
  }
}

banner.addEventListener("mousedown", showItem1);

let runner = document.getElementById("runner");
let hiddenText2 = document.getElementById("hidden-text2");
let isClicked2 = false;

function showItem2() {
  if (!isClicked2) {
    hiddenText2.style.display = "block";
    isClicked2 = true;
  } else {
    hiddenText2.style.display = "none";
    isClicked2 = false;
  }
}

runner.addEventListener("mousedown", showItem2);
