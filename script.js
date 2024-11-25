// DARK MODE / LIGHT MODE TOGGLE FUNCTIONALITY
const themeSwitch = document.getElementById("themeSwitch");

// Add event listener for the theme switch toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Coin Flip Functionality
const resultBox = document.getElementById('result-box');
const coinSound = document.getElementById('coin-sound');

// Add click event listener to the result box
resultBox.addEventListener('click', function () {
  // Play the coin sound
  coinSound.currentTime = 0; // Reset sound to start
  coinSound.play().catch(err => {
    console.error("Audio playback error:", err);
  });

  // Generate a random result (Heads or Tails)
  const isHeads = Math.random() < 0.5;
  const result = isHeads ? 'HEADS' : 'TAILS';

  // Restart flip animation
  resultBox.style.animation = 'none';  // Reset animation
  void resultBox.offsetHeight;         // Trigger reflow to restart animation
  resultBox.style.animation = 'flip 0.3s ease-in-out';  // Apply the flip animation

  // Update result after animation
  setTimeout(() => {
    resultBox.textContent = result;
  }, 300);  // Update text after animation (timed to match animation duration)
});
