const container = document.querySelector('.container');
const rainbowButton = document.querySelector('.js-change-color');

let rainbowMode = false;

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create the grid once
for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('container-cell');

  cell.addEventListener('mouseover', () => {
    if (rainbowMode) {
      cell.style.backgroundColor = getRandomColor();
    } else {
      cell.style.backgroundColor = 'red'; // default color
    }
  });

  container.appendChild(cell);
}

// Toggle rainbow mode on button click
rainbowButton.addEventListener('click', () => {
  rainbowMode = !rainbowMode;
  rainbowButton.textContent = rainbowMode ? 'Disable Rainbow' : 'Enable Rainbow';
});
