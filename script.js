// Select DOM elements
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

  // Add flip animation
  resultBox.classList.remove('flip-animation');
  void resultBox.offsetWidth; // Trigger reflow to restart animation
  resultBox.classList.add('flip-animation');

  // Update result after animation
  setTimeout(() => {
    resultBox.textContent = result;
  }, 300); // Matches animation duration
});
