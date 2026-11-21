const outputDiv = document.getElementById("output");
const calcBtn = document.getElementById("calcBtn");

function runCalculator() {
  // 1. Input using prompt() (prompt returns a string, so Number() converts it)
  const firstInput = prompt("Enter the first number:");
  const secondInput = prompt("Enter the second number:");

  // If user clicks Cancel on either prompt
  if (firstInput === null || secondInput === null) {
    console.log("Calculation cancelled by user.");
    outputDiv.innerHTML = "<p>Calculation cancelled.</p>";
    return;
  }

  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  // Check if inputs are valid numbers
  if (firstInput.trim() === "" || secondInput.trim() === "" || Number.isNaN(num1) || Number.isNaN(num2)) {
    console.log("Invalid input! Please enter valid numbers.");
    outputDiv.innerHTML = "<p><strong>Error:</strong> Please enter valid numbers.</p>";
    return;
  }

  // 2. Arithmetic Operators
  const addition = num1 + num2;          // + Addition
  const subtraction = num1 - num2;       // - Subtraction
  const multiplication = num1 * num2;    // * Multiplication
  const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; // / Division

  // 3. Output in Console
  console.log("--- Calculator Results ---");
  console.log("First Number:", num1);
  console.log("Second Number:", num2);
  console.log("Addition (+):", addition);
  console.log("Subtraction (-):", subtraction);
  console.log("Multiplication (*):", multiplication);
  console.log("Division (/):", division);

  // 4. Output on Webpage
  outputDiv.innerHTML = `
    <h3>Calculation Results</h3>
    <p><strong>First Number:</strong> ${num1}</p>
    <p><strong>Second Number:</strong> ${num2}</p>
    <hr />
    <p><strong>Addition (${num1} + ${num2}):</strong> ${addition}</p>
    <p><strong>Subtraction (${num1} - ${num2}):</strong> ${subtraction}</p>
    <p><strong>Multiplication (${num1} * ${num2}):</strong> ${multiplication}</p>
    <p><strong>Division (${num1} / ${num2}):</strong> ${division}</p>
  `;
}

calcBtn.addEventListener("click", runCalculator);

// Run automatically when page loads
runCalculator();