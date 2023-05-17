// Calculator...

function display(value) {
  document.getElementById("calc-screen").value += value;
}

// Evaluates the input
function calculate() {
  var initialValue = document.getElementById("calc-screen").value;
  var evaluatedValue = eval(initialValue);
  document.getElementById("calc-screen").value = evaluatedValue;
}

// Clears the screen
function reset() {
  document.getElementById("calc-screen").value = "";
}