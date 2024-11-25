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

<script>
  // Get the dropdown button and dropdown content
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Function to toggle the dropdown visibility
  function toggleDropdown() {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }

  // Close the dropdown if the user clicks anywhere outside of it
  document.addEventListener('click', function(event) {
    if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });

  // Add click event to the button to toggle the dropdown
  dropbtn.addEventListener('click', function(event) {
    event.stopPropagation();  // Prevent the click from being propagated to the document
    toggleDropdown();  // Toggle the dropdown visibility
  });
</script>
