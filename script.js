// Select display element
const display = document.getElementById("display");

// Append values to display
function appendValue(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

// Clear display
function clearDisplay() {
    display.innerText = "0";
}

// Delete last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}

// Calculate result
function calculateResult() {
    try {
        let result = eval(display.innerText);

        // Handle long numbers
        display.innerText = parseFloat(result.toFixed(8)).toString();
    } catch {
        display.innerText = "Error";
    }
}