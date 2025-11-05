// Countdown logic
const countdown = document.getElementById("countdown");
const currentYear = new Date().getFullYear();

// Set target date to November 14 this year
let targetDate = new Date(`${currentYear}-11-14T00:00:00`);

// If birthday already passed this year, count down to next year's birthday
if (new Date() > targetDate) {
  targetDate = new Date(`${currentYear + 1}-11-14T00:00:00`);
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.textContent = "🎂 It's your birthday today!";
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

// Reveal surprise section
const revealBtn = document.getElementById("revealBtn");
const landing = document.getElementById("landing");
const surprise = document.getElementById("surprise");

revealBtn.addEventListener("click", () => {
  landing.classList.add("hidden");
  surprise.classList.remove("hidden");
  startConfetti();
});

// Balloon generator
const balloonColors = ["#ff8fab", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
const balloonsContainer = document.getElementById("balloons");

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  balloon.style.animationDuration = Math.random() * 5 + 8 + "s";
  balloonsContainer.appendChild(balloon);

  setTimeout(() => balloon.remove(), 13000);
}

setInterval(createBalloon, 800);

// Confetti animation
function startConfetti() {
  const duration = 5000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Load confetti.js dynamically
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.body.appendChild(script);
