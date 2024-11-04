//DISPLAY NAME
function displayName(name) {
  document.write(name);
}
//BUTTON ALERT
function buttonAlert() {
  alert("You clicked the button!");
}
function changeColor() {
  document.getElementById("color").style.color = "red";
}
function productOfTwoNumbers(firstNumber, secondNumber, outputDisplay) {
  var product = firstNumber * secondNumber;
  document.getElementById(outputDisplay).innerHTML = product;
}
// function changeBackground() {
//   document.getElementById("background").style.backgroundColor = "red";
// }
// function changeText() {
//   document.getElementById("text").innerHTML = "Goodbye!";
// }
// function changeImage() {