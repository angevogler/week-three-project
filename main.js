// select elements

// results screen
const view = document.querySelector("#answers");
// all buttons
const buttons = document.querySelectorAll(".btn");
// number buttons
const numButtons = document.querySelectorAll(".number");
// operator buttons
const opButtons = document.querySelectorAll(".operator");
// equal button
const eqlButton = document.querySelector("#eql-btn");
// clear button
const clrButton = document.querySelector("#clr-btn");

//declare other variables
let number = "";
let calculation = [];

// define functions for operator buttons
let operators = {
  '+': function (a, b) {
    return (a + b);
  },
  '-': function (a, b) {
    return (a - b);
  },
  '*': function (a, b) {
    return (a * b);
  },
  '/': function (a, b) {
    return (a/b);
  }
};

// event listener for number buttons
// iterate over every number button to set each button to its own index
for (let i = 0; i < numButtons.length; i++) {
  //assign variable to store each number button index
  let buttonVal = numButtons[i];
  // add event listener to each index
  buttonVal.addEventListener("click", function() {
    // store the actual number that should be appearing
    let content = buttonVal.innerText;
    // display the content in the viewer
    view.textContent += content;
    number += content;
    console.log(number);
    return number;
  })
};
calculation.push(Number(number));

// event listeners for operator buttons
// iterate over every operator button to set each button to its own index
for (let i = 0; i < opButtons.length; i++) {
  // assign variable to store each operator button index
  let buttonVal = opButtons[i];
  // add event listener to each index
  buttonVal.addEventListener("click", function(){
    // store the actual character that should be appearing
    let content = buttonVal.innerText;
    // display the content in the viewer
    view.textContent += content;
    number += content;
    console.log(number);
    return number;
  })
};

// event listener for equal button
eqlButton.addEventListener("click", function() {
  let content = eqlButton.innerText;
  view.textContent = content;
})

// event listener for clear button
clrButton.addEventListener("click", function() {
  // if the clear button is clicked
  // display the value zero and clear every other value
  let content = 0;
  view.textContent = content;
});
