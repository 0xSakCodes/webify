const countdown = document.getElementById("countdown");
const birthdaySection = document.getElementById("birthdaySection");
const countdownSection = document.getElementById("countdownSection");

const targetDate = new Date("2025-11-4T00:00:00"); // fixed date (no rollover)

// Check current time and update countdown
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  // If the date has arrived or passed
  if (diff <= 0) {
    countdownSection.classList.add("hidden");
    birthdaySection.classList.remove("hidden");
    startBalloons();
    startConfetti();
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${mins}m ${secs}s left 🎈`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Balloons generator
const balloonColors = ["#ff8fab", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
const balloonsContainer = document.getElementById("balloons");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor =
    balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = Math.random() * 5 + 8 + "s";
  balloonsContainer.appendChild(balloon);

  setTimeout(() => balloon.remove(), 13000);
}

function startBalloons() {
  setInterval(createBalloon, 800);
}

// Confetti celebration
function startConfetti() {
  const duration = 5000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// Load confetti.js
const script = document.createElement("script");
script.src =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.body.appendChild(script);

// Button to trigger confetti again
document.getElementById("confettiBtn").addEventListener("click", startConfetti);
