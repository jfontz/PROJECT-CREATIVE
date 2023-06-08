// script.js
const parentDiv = document.querySelector(".parent");
const background = document.querySelector(".background");

parentDiv.addEventListener("mouseover", function (event) {
  const computedStyles = getComputedStyle(event.target);
  const backgroundColor = computedStyles.backgroundColor;
  background.style.backgroundColor = backgroundColor;
  background.style.opacity = 0.3;
});

parentDiv.addEventListener("mouseout", function () {
  background.style.backgroundColor = "#fefefe";
});
