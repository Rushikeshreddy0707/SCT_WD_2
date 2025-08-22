const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const del = document.getElementById("delete");
const equals = document.getElementById("equals");

let input = "";

// Add button click functionality
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value) {
      input += value;
      display.value = input;
    }
  });
});

// Clear display
clear.addEventListener("click", () => {
  input = "";
  display.value = "";
});

// Delete last character
del.addEventListener("click", () => {
  input = input.slice(0, -1);
  display.value = input;
});

// Calculate result
equals.addEventListener("click", () => {
  try {
    input = eval(input).toString(); // evaluate expression
    display.value = input;
  } catch (error) {
    display.value = "Error";
    input = "";
  }
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  if (/[0-9+\-*/.]/.test(event.key)) {
    input += event.key;
    display.value = input;
  } else if (event.key === "Enter") {
    try {
      input = eval(input).toString();
      display.value = input;
    } catch {
      display.value = "Error";
      input = "";
    }
  } else if (event.key === "Backspace") {
    input = input.slice(0, -1);
    display.value = input;
  } else if (event.key === "Escape") {
    input = "";
    display.value = "";
  }
});
