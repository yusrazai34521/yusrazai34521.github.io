// let displayValue = "";

// function appendToDisplay(value) {
//   displayValue += value;
//   document.querySelector("input[name='display']").value = displayValue;
// }

// function calculate() {
//   try {
//     const result = eval(displayValue);
//     document.querySelector("input[name='display']").value = result;
//     displayValue = "";
//   } catch (error) {
//     alert("Invalid input");
//   }
// }

// function clearDisplay() {
//   displayValue = "";
//   document.querySelector("input[name='display']").value = "";
// }

// function deleteLast() {
//   displayValue = displayValue.slice(0, -1);
//   document.querySelector("input[name='display']").value = displayValue;
// }

// function toggleSubMenu() {
//   const submenu = document.querySelector(".submenu-content");
//   submenu.style.display = submenu.style.display === "block" ? "none" : "block";
// }

// function toggleScientificMode() {
//   const scientificFunctions = document.querySelectorAll(".scientific-function");
//   scientificFunctions.forEach((func) => {
//     func.style.display = func.style.display === "block" ? "none" : "block";
//   });
// }

// function toggleUnitConversion() {
//   const unitConversionFunctions = document.querySelectorAll(
//     ".unit-conversion-function"
//   );
//   unitConversionFunctions.forEach((func) => {
//     func.style.display = func.style.display === "block" ? "none" : "block";
//   });
// }

// function toggleCurrencyConversion() {
//   const currencyConversionFunctions = document.querySelectorAll(
//     ".currency-conversion-function"
//   );
//   currencyConversionFunctions.forEach((func) => {
//     func.style.display = func.style.display === "block" ? "none" : "block";
//   });
// }

// function calculateSquareRoot() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   if (!isNaN(inputValue)) {
//     const result = Math.sqrt(inputValue);
//     document.getElementById("display").value = result;
//   } else {
//     alert("Invalid input");
//   }
// }

// function calculateSine() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   const result = Math.sin(inputValue * (Math.PI / 180)); // Convert degrees to radians
//   document.getElementById("display").value = result.toFixed(4);
// }

// function calculateCosine() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   const result = Math.cos(inputValue * (Math.PI / 180)); // Convert degrees to radians
//   document.getElementById("display").value = result.toFixed(4);
// }

// function calculateTangent() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   const result = Math.tan(inputValue * (Math.PI / 180)); // Convert degrees to radians
//   document.getElementById("display").value = result.toFixed(4);
// }

// function calculatePower() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   const result = Math.pow(inputValue, 2);
//   document.getElementById("display").value = result;
// }

// function insertPi() {
//   const pi = Math.PI;
//   document.getElementById("display").value += pi.toFixed(4);
// }

// function convertFahrenheitToCelsius() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   if (!isNaN(inputValue)) {
//     const result = (inputValue - 32) * (5 / 9);
//     document.getElementById("display").value = result.toFixed(2) + " °C";
//   } else {
//     alert("Invalid input");
//   }
// }

// function convertCelsiusToFahrenheit() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   if (!isNaN(inputValue)) {
//     const result = inputValue * (9 / 5) + 32;
//     document.getElementById("display").value = result.toFixed(2) + " °F";
//   } else {
//     alert("Invalid input");
//   }
// }

// function convertPKRtoUSD() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   if (!isNaN(inputValue)) {
//     const result = inputValue * 0.0063; // Assuming 1 PKR = 0.0063 USD
//     document.getElementById("display").value = "$ " + result.toFixed(2);
//   } else {
//     alert("Invalid input");
//   }
// }

// function convertUSDtoPKR() {
//   const inputValue = parseFloat(document.getElementById("display").value);
//   if (!isNaN(inputValue)) {
//     const result = inputValue * 278.54; // Assuming 1 USD = 158.73 PKR
//     document.getElementById("display").value = "PKR " + result.toFixed(2);
//   } else {
//     alert("Invalid input");
//   }
// }

// Scientific Mode Functions
function calculateSquareRoot() {
  const display = document.querySelector('input[name="display"]');
  display.value = Math.sqrt(parseFloat(display.value));
}

function calculatePower() {
  const display = document.querySelector('input[name="display"]');
  display.value = Math.pow(parseFloat(display.value), 2);
}

function calculateSine() {
  const display = document.querySelector('input[name="display"]');
  display.value = Math.sin(parseFloat(display.value));
}

function calculateCosine() {
  const display = document.querySelector('input[name="display"]');
  display.value = Math.cos(parseFloat(display.value));
}

function calculateTangent() {
  const display = document.querySelector('input[name="display"]');
  display.value = Math.tan(parseFloat(display.value));
}

function insertPi() {
  const display = document.querySelector('input[name="display"]');
  display.value += Math.PI;
}

// Unit Conversion Functions
function convertFahrenheitToCelsius() {
  const amount = parseFloat(document.getElementById("amount").value);
  const celsius = (amount - 32) * (5 / 9);
  document.getElementById("amount").value = celsius.toFixed(2);
}

function convertCelsiusToFahrenheit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fahrenheit = (amount * 9) / 5 + 32;
  document.getElementById("amount").value = fahrenheit.toFixed(2);
}

// Currency Conversion Functions
function convertPoundToPKR() {
  const amount = parseFloat(document.getElementById("amount").value);
  // Implement actual conversion rate
  const pkr = amount * 200; // Example conversion rate
  document.getElementById("amount").value = pkr.toFixed(2);
}

function convertPKRToPound() {
  const amount = parseFloat(document.getElementById("amount").value);
  // Implement actual conversion rate
  const pound = amount / 200; // Example conversion rate
  document.getElementById("amount").value = pound.toFixed(2);
}
// Clear display
function clearDisplay() {
  const display = document.querySelector('input[name="display"]');
  display.value = "";
}

// Delete last character from display
function deleteLast() {
  const display = document.querySelector('input[name="display"]');
  display.value = display.value.slice(0, -1);
}

// Initialize the calculator
function initCalculator() {
  // Attach event listeners to the buttons
  const buttons = document.querySelectorAll(".calculator button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.getAttribute("value");
      if (value) {
        if (value === "=") {
          calculate();
        } else {
          const display = document.querySelector('input[name="display"]');
          display.value += value;
        }
      }
    });
  });
}

// Calculate expression in display
function calculate() {
  const display = document.querySelector('input[name="display"]');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Call initCalculator when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initCalculator();
});
