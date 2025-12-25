// 1. Click Event
const clickBtn = document.getElementById("clickBtn");
const clickResult = document.getElementById("clickResult");

clickBtn.addEventListener("click", () => {
  clickResult.textContent = "Button clicked!";
});

// 2. Double Click Event
const dblClickBtn = document.getElementById("dblClickBtn");
const dblResult = document.getElementById("dblResult");

dblClickBtn.addEventListener("dblclick", () => {
  dblResult.textContent = "Button double-clicked!";
});

// 3. Mouse Over Event
const mouseOverBox = document.getElementById("mouseOverBox");

mouseOverBox.addEventListener("mouseover", () => {
  mouseOverBox.style.backgroundColor = "#2ecc71";
});

// 4. Mouse Out Event
const mouseOutBox = document.getElementById("mouseOutBox");

mouseOutBox.addEventListener("mouseout", () => {
  mouseOutBox.style.backgroundColor = "#e74c3c";
});

// 5. Key Press Event
const keyPressInput = document.getElementById("keyPressInput");
const keyPressResult = document.getElementById("keyPressResult");

keyPressInput.addEventListener("keypress", () => {
  keyPressResult.textContent = "Key pressed!";
});

// 6. Key Down & Key Up
const keyInput = document.getElementById("keyInput");
const keyResult = document.getElementById("keyResult");

keyInput.addEventListener("keydown", () => {
  keyResult.textContent = "Key down";
});

keyInput.addEventListener("keyup", () => {
  keyResult.textContent = "Key up";
});
