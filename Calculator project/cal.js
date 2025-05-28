let expressionDisplay = document.getElementById("expressionDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let lastAnswer = "";

function append(value) {
  if (value === 'x') value = '*';
  if (value === '÷') value = '/';
  expressionDisplay.textContent += value;
}

function clearDisplay() {
  expressionDisplay.textContent = "";
  resultDisplay.textContent = "";
}

function del() {
  expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(expressionDisplay.textContent);
    resultDisplay.textContent = result;
    lastAnswer = result;
  } catch {
    resultDisplay.textContent = "Error";
  }
}

function useAns() {
  expressionDisplay.textContent += lastAnswer;
}

function sqrt() {
  try {
    let result = Math.sqrt(eval(expressionDisplay.textContent));
    resultDisplay.textContent = result;
    lastAnswer = result;
  } catch {
    resultDisplay.textContent = "Error";
  }
}

function toggleSign() {
  let exp = expressionDisplay.textContent;
  const match = exp.match(/(-?\d+\.?\d*)$/);
  if (match) {
    const number = match[0];
    const toggled = number.startsWith('-') ? number.slice(1) : '-' + number;
    expressionDisplay.textContent = exp.slice(0, -number.length) + toggled;
  }
}
