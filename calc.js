function startCalculator() {
  let userName = document.getElementById("username").value;
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let op = document.getElementById("operation").value;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;

  switch (op) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "x":
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Invalid operation selected!");
      return;
  }

  document.getElementById("Result").value = result;
  document.getElementById("output").innerHTML =
    `<h3>Hello ${userName || "User"}, Result: ${num1} ${op} ${num2} = ${result}</h3>`;
}
