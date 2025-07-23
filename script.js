const knife = document.getElementById("knife");
const cakeLeft = document.getElementById("cake-left");
const cakeRight = document.getElementById("cake-right");
let isDragging = false;

knife.addEventListener("mousedown", (e) => {
  isDragging = true;
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const cakeArea = document.querySelector(".cake-area");
    const rect = cakeArea.getBoundingClientRect();
    let x = e.clientX - rect.left - 40;

    // Boundaries for knife
    x = Math.max(0, Math.min(x, rect.width - 80));
    knife.style.left = x + "px";

    // Detect cake center to simulate cutting
    if (x > 90 && x < 130) {
      splitCake();
    }
  }
});

function splitCake() {
  // Prevent multiple splits
  if (cakeLeft.style.transform !== "") return;

  cakeLeft.style.transform = "translateX(-60px) rotate(-5deg)";
  cakeRight.style.transform = "translateX(60px) rotate(5deg)";
  addSparkles();
}

function addSparkles() {
  const sparklesContainer = document.getElementById("sparkles");
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    sparklesContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}








