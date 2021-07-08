let pixelColor = document.querySelector("#pixel-board");

let blackColor = document.getElementById("black");
let blueColor = document.getElementById("blue");
let greenColor = document.getElementById("green");
let yellowColor = document.getElementById("yellow");

function catchColor(event) {
  let selectColor = document.querySelector(".selected");
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
}

blackColor.addEventListener("click", catchColor);
blueColor.addEventListener("click", catchColor);
greenColor.addEventListener("click", catchColor);
yellowColor.addEventListener("click", catchColor);

pixelColor.addEventListener("click", changeColor);

function changeColor(event) {
  let selectColor = document.querySelector(".selected");
  event.target.style.backgroundColor = selectColor.id;
}