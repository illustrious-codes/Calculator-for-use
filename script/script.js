function seven() {
  document.getElementById("Calculator_screen").value += "7";
}

function eight() {
  document.getElementById("Calculator_screen").value += "8";
}

function nine() {
  document.getElementById("Calculator_screen").value += "9";
}

function four() {
  document.getElementById("Calculator_screen").value += "4";
}

function five() {
  document.getElementById("Calculator_screen").value += "5";
}

function six() {
  document.getElementById("Calculator_screen").value += "6";
}

function three() {
  document.getElementById("Calculator_screen").value += "3";
}

function two() {
  document.getElementById("Calculator_screen").value += "2";
}

function one() {
  document.getElementById("Calculator_screen").value += "1";
}

function decimal() {
  document.getElementById("Calculator_screen").value += ".";
}

function double_zero() {
  document.getElementById("Calculator_screen").value += "00";
}

function zero() {
  document.getElementById("Calculator_screen").value += "0";
}

function del() {
  document.getElementById("Calculator_screen").value = " ";
}

function modulus() {
  document.getElementById("Calculator_screen").value += "%";
}

function divide() {
  document.getElementById("Calculator_screen").value += "/";
}

function multiply() {
  document.getElementById("Calculator_screen").value += "*";
}

function minus() {
  document.getElementById("Calculator_screen").value += "-";
}

function plus() {
  document.getElementById("Calculator_screen").value += "+";
}

function equal() {
  document.getElementById("Calculator_screen").value = eval(
    document.getElementById("Calculator_screen").value
  );
}
