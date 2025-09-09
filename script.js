let display = document.getElementById("display");
let currentInput = "";

function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

function operate(operator) {
  currentInput += " " + operator + " ";
  display.value = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);

    if (!isFinite(result)) {
      display.value = "Error";
      currentInput = "";
    } else {
      currentInput = result.toString();
      display.value = currentInput;
    }
  } catch {
    display.value = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function squareRoot() {
  try {
    currentInput = Math.sqrt(eval(currentInput)).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
}

function power() {
  try {
    currentInput = Math.pow(eval(currentInput), 2).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
}

function percentage() {
  try {
    currentInput = (eval(currentInput) / 100).toString();
    display.value = currentInput;
  } catch {
    display.value = "Error";
  }
}

function convertCurrency() {
  let amount = parseFloat(document.getElementById("amount").value);
  let from = document.getElementById("fromCurrency").value;
  let to = document.getElementById("toCurrency").value;

  let rates = {
    USD: { COP: 4200, EUR: 0.9, USD: 1 },
    EUR: { COP: 4600, USD: 1.1, EUR: 1 },
    COP: { USD: 0.00024, EUR: 0.00022, COP: 1 }
  };

  if (isNaN(amount)) {
    document.getElementById("result").innerText = "❌ Ingresa un valor válido.";
    return;
  }

  let converted = amount * rates[from][to];
  document.getElementById("result").innerText =
    `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}