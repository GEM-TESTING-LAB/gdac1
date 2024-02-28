const searchInput = document.getElementById('searchInput');
const displayNumberDiv = document.getElementById('displayedNumber');
const displayButton = document.querySelector('.search-bar button');

displayButton.addEventListener('click', () => {
  const enteredNumber = searchInput.value;
  if (!isNaN(enteredNumber)) {  // Check if it's a valid number (including decimals)
    displayNumberDiv.textContent = enteredNumber;
  } else {
    alert('Please enter a valid number.');
  }
});
