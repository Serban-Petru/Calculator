function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }

let string = "";
let lastNumber = 0;
let sign = "";
let flagSign = 0;

const btn = document.querySelectorAll('#unu, #doi, #trei, #patru, #cinci, #sase, #sapte, #opt, #noua, #zero');
const semne = document.querySelectorAll("#plus, #scadere, #fractie, #imultire");
const display = document.querySelector(".display");
const egal = document.querySelector("#egal");

function show(value, clear = false) {
  if (clear) {
    display.textContent = value;
    return;
  }

  const digits = document.createElement("p");
  digits.textContent = value;
  display.appendChild(digits);
}

// Add number buttons
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    string += btn[i].value;
    show(btn[i].value);
  });
}

// Operation handler
for (let i = 0; i < semne.length; i++) {
  semne[i].addEventListener("click", () => {
    flagSign++;

    if (flagSign === 2) {
      let [a, b] = nr(string, sign).map(Number);
      if (!isNaN(lastNumber)) a = lastNumber;

      calcul(a, b);
      show(lastNumber, true);

      string = lastNumber.toString();
      flagSign = 1;
    }

    sign = semne[i].value;
    string += sign;
    show(sign);
  });
}

// Equal button
egal.addEventListener("click", () => {
  let [a, b] = nr(string, sign).map(Number);

  if (!string.includes(sign) && !isNaN(lastNumber)) {
    a = lastNumber;
  }

  calcul(a, b);
  show(lastNumber, true);

  string = lastNumber.toString();
  sign = "";
  flagSign = 0;
});

// Calculation logic
function calcul(a, b) {
  switch (sign) {
    case "+": lastNumber = add(a, b); break;
    case "-": lastNumber = subtract(a, b); break;
    case "*": lastNumber = multiply(a, b); break;
    case "/": lastNumber = divide(a, b); break;
  }
}

// Split string by operator
function nr(str, currentSign) {
  if (!currentSign) return [str, "0"];
  return str.split(currentSign);
}
