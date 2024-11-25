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
  coinSound.play();

  // Generate a random result
  const isHeads = Math.random() < 0.5;
  const result = isHeads ? 'HEADS' : 'TAILS';

  // Restart flip animation
  resultBox.style.animation = 'none'; // Reset animation
  void resultBox.offsetHeight; // Trigger reflow to restart animation
  resultBox.style.animation = 'flip 0.3s ease-in-out';

  // Update result after animation
  setTimeout(() => {
    resultBox.textContent = result;
  }, 150); // Update text midway during the flip
});
