const display = document.getElementById("display");

function displayValue(val) {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    }

    // Prevent adding multiple operators or dots consecutively
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '.', '%'];

    if (operators.includes(val) && operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + val;
    } else {
        display.value += val;
    }
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

function Calculation() {
    try {
        let UserInput = display.value;
        if (!UserInput) return;

        // Handle basic percentage correctly (eval('%') will fail)
        UserInput = UserInput.replace(/%/g, '/100');

        // Replace visual operators with JS operators if needed, 
        // but we already use standard JS operators in the HTML values.

        const result = eval(UserInput);

        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            // Provide clean numbers by rounding off to a max of 10 decimal places
            display.value = Math.round(result * 10000000000) / 10000000000;
        }
    } catch (error) {
        display.value = "Error";
    }
}