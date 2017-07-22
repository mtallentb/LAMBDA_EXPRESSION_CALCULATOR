const firstNum = document.getElementById("firstNum");
const secondNum = document.getElementById("secondNum");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

multiplyButton.addEventListener("click", event => {
  console.log(firstNum.value * secondNum.value);
});

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

addButton.addEventListener("click", event => {
  console.log(firstNum.value + secondNum.value);
});

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

subtractButton.addEventListener("click", event => {
  console.log(firstNum.value - secondNum.value);
});

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

divideButton.addEventListener("click", event => {
  console.log(firstNum.value / secondNum.value);
});

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 
 function add(num1, num2) {
  return num1 + num2;
 }

 function subtract(num1, num2) {
  return num1 - num2;
 }

 function multiply(num1, num2) {
  return num1 * num2;
 }

 function divide(num1, num2) {
  return num1 / num2;
 }

 function doMath(num1, num2, operator) {
  console.log(operator(num1, num2));
 }

 doMath(4, 5, multiply);
 doMath(59, 32, subtract);
 doMath(144, 12, divide);
 doMath(1993, 2456, add);


