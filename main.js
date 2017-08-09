// select elements
// results screen
const view = document.querySelector("#answers");
// all buttons
const buttons = document.querySelectorAll(".btn");
// number buttons
const numButtons = document.querySelectorAll(".number");
// operator buttons
const opButtons = document.querySelectorAll(".operator");
// decimal button
const decButton = document.querySelector("#dec-btn");
// equal button
const eqlButton = document.querySelector("#eql-btn");
// clear button
const clrButton = document.querySelector("#clr-btn");

//declare other variables
let number = "";
let calculation = [];

// define functions for operator buttons
let operators = {
  'addition': function (a, b) {
    return (a + b);
  },
  'subtract': function (a, b) {
    return (a - b);
  },
  'multiply': function (a, b) {
    return (a * b);
  },
  "divide": function (a, b) {
    return (a/b);
  },
  "modulo": function (a, b) {
    return (a%b);
  },
  "sqrt": function (a) {
    return Math.sqrt(a);
  }
};

// event listener for number buttons
for (let i = 0; i < numButtons.length; i++) {
  let buttonVal = numButtons[i];
  buttonVal.addEventListener("click", function() {
    if ((view.textContent === "0") || (view.textContent === answer(calculation)) || (number === "")) {
      view.textContent = "";
    }
    let content = buttonVal.innerText;
    view.textContent += content;
    number = content;
    console.log(number);
    calculation.push(parseFloat(number));
  })
};

// event listener for decimal button
decButton.addEventListener("click", function() {
  let content = decButton.innerText;
  view.textContent += content;
  number = content;
  console.log(number);
  calculation.push(number);
})

// event listeners for operator buttons
for (let i = 0; i < opButtons.length; i++) {
  let buttonVal = opButtons[i];
  buttonVal.addEventListener("click", function(){
    let content = buttonVal.innerText;
    view.textContent += content;
    number = content;
    console.log(number);
    calculation.push(number);
  })
};
calculation.push(number);

function answer (calculation) {
  let a = 0;
  let b = 0;
  let numValue = "";
  let operation = "";
  // create a for loop to loop through each index of calculation
  // need to parse through array and assign variables to the numerical values
  //and functions to the operators
  for (let i = 0; i < calculation.length; i++) {
    if ((calculation[i] >=0) && (calculation[i] < 10) || (calculation[i] === '.')) {
      // concatenate digits into variables
      numValue += calculation[i];
    } else {
      // switch digits from strings to numbers
      a = Number(numValue);
      // empty the numValue string
      numValue = "";
      // put operator into string
      operation = calculation[i];
    }
  }
  // switch digits from strings to numbers
  b = Number(numValue);

  if (operation === "+") {
    // call + function from operators object
    return (operators.addition(a, b).toPrecision(3));
  } else if (operation === "-") {
    // call + function from operators object
    return operators.subtract(a, b);
  } else if (operation === "x") {
    // call * function from operators object
    return operators.multiply(a, b);
  } else if (operation === "/") {
    // call / function from operators object
    return operators.divide(a, b);
  } else if (operation === "%") {
    // call % function
    return operators.modulo(a, b);
  } else if (operation === "sqrt") {
    // call sqrt function
    return operators.sqrt(a);
  } else {
    return "error";
  }
}

// event listener for equal button
eqlButton.addEventListener("click", function() {
  console.log(calculation);
  let content = answer(calculation);
  view.textContent = content;
  number = "";
  calculation = [];
})

// event listener for clear button
clrButton.addEventListener("click", function() {
  let content = 0;
  view.textContent = content;
  number = "";
  calculation = [];
});
