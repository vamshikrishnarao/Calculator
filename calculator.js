function appendToDisplay(value) {
    let display  = document.getElementById("display");
    let lastChar = display.value.slice(-1);             // Get the last character

      // Prevent multiple operators in a row
    if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
        return;  // Stop adding another operator
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let display = document.getElementById("display");
        display.value = eval(display.value);
    } catch (error) {
        alert("Invalid input");
    }
}
