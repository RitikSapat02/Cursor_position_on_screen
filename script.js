const container = document.querySelector(".container");
const xBox = document.querySelector(".x-pos");
const yBox = document.querySelector(".y-pos");

window.addEventListener("mousemove", (event) => {
  xBox.innerHTML = event.clientX;
  yBox.innerHTML = event.clientY;
});
