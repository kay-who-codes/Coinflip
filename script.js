document.getElementById('flip-button').addEventListener('click', function () {
  // Generate random result
  const result = Math.random() < 0.5 ? 'HEADS' : 'TAILS';

  // Get the result box and set the result
  const resultBox = document.getElementById('result-box');

  // Optional: add animation class
  resultBox.classList.remove('flip-animation');
  void resultBox.offsetWidth; // Trigger reflow to restart animation
  resultBox.classList.add('flip-animation');

  // Update result text
  setTimeout(() => {
    resultBox.textContent = result;
  }, 300); // Matches the animation duration
});
