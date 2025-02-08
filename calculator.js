let currentDisplay = "";

function updateDisplay() {
  document.querySelector('#display').value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  updateDisplay();
}

function deleteLast() {
  currentDisplay = currentDisplay.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  currentDisplay += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentDisplay += operator;
  updateDisplay();
}

function appendDecimal() {
  if (!currentDisplay.includes('.')) {
    currentDisplay += '.';
    updateDisplay();
  }
}

function calculateResult() {
  try {
    currentDisplay = eval(currentDisplay);
    updateDisplay();
  } catch (error) {
    alert("Invalid Expression");
    clearDisplay();
  }
}

function applySquareRoot() {
  currentDisplay = Math.sqrt(eval(currentDisplay)).toString();
  updateDisplay();
}

function addExponent() {
  currentDisplay += "**";
  updateDisplay();
}

function insertValue(value) {
  currentDisplay += value;
  updateDisplay();
}

function applyModulus() {
  currentDisplay += "%";
  updateDisplay();
}

function playPopSound() {
  const sound = document.getElementById('popSound');
  sound.currentTime = 0;
  sound.play();
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', playPopSound);
});