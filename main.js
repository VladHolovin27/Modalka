const modal = document.getElementById('myModal');
const btnOpen = document.getElementById("openModal");
const btn = document.querySelector('.button');
const clickCount = document.querySelector('.click-counter');
let button = document.querySelector(".btn");


btnOpen.onclick = function() {
    if (modal.style.display === "block") {
        modal.style.display = "none";
    } else {
        modal.style.display = "block";
    }
}
  

window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  

let clicks = 0;

btn.addEventListener("dblclick", () => {
    clicks = 0;
    clickCount.textContent = clicks;
});

btn.addEventListener("click", () => {
    clicks++;
    clickCount.textContent = clicks;
});

let rotation = 0;
button.addEventListener('click', () => {
    const targetX = window.screenX + 100; 
      const targetY = window.screenY + 100; 
      modal.style.left = `${targetX}px`;
      modal.style.top = `${targetY}px`;
  });