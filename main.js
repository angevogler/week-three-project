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
let pemdasVal;


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
    if ((view.textContent === "0") || (number === "")) {
      view.textContent = "";
    }
    let content = buttonVal.innerText;
    view.textContent += content;
    number += content;
    //calculation.push(parseFloat(number));
  })
};

// event listener for decimal button
decButton.addEventListener("click", function() {
  let content = decButton.innerText;
  view.textContent += content;
  number += content;
})

// event listeners for operator buttons
for (let i = 0; i < opButtons.length; i++) {
  let buttonVal = opButtons[i];
  buttonVal.addEventListener("click", function(){
    let content = buttonVal.innerText;
    view.textContent += content;
    calculation.push(parseFloat(number), content);
    number = '';
  })
};

// // basic math function
// function answer (calculation) {
//   let a = 0;
//   let b = 0;
//   let numValue = "";
//   let operation = "";
//   // create a for loop to loop through each index of calculation
//   // need to parse through array and assign variables to the numerical values
//   //and functions to the operators
//   for (let i = 0; i < calculation.length; i++) {
//     if ((calculation[i] >=0) && (calculation[i] < 10) || (calculation[i] === '.')) {
//       // concatenate digits into variables
//       numValue += calculation[i];
//     } else {
//       // switch digits from strings to numbers
//       a = Number(numValue);
//       // empty the numValue string
//       numValue = "";
//       // put operator into string
//       operation = calculation[i];
//     }
//   }
//   // switch digits from strings to numbers
//   b = Number(numValue);
//
//   if (operation === "+") {
//     // call + function from operators object
//     return (operators.addition(a, b).toPrecision(3));
//   } else if (operation === "-") {
//     // call + function from operators object
//     return operators.subtract(a, b);
//   } else if (operation === "x") {
//     // call * function from operators object
//     return operators.multiply(a, b);
//   } else if (operation === "/") {
//     // call / function from operators object
//     return operators.divide(a, b);
//   } else if (operation === "%") {
//     // call % function
//     return operators.modulo(a, b);
//   } else if (operation === "sqrt") {
//     // call sqrt function
//     return operators.sqrt(a);
//   } else {
//     return "error";
//   }
// }

// event listener for equal button
eqlButton.addEventListener("click", function() {
  calculation.push(parseFloat(number));
  console.log(calculation);
  let a = 0;
  let b = 0;
  // if there is a sqrt
  for (let i = 0; i < calculation.length; i++) {
  // find strings whose index = sqrt
  if (calculation[i] === 'sqrt') {
    let indexSqrt = calculation.indexOf('sqrt');

    // if there is a sqrt
    if (calculation[i] === 'sqrt') {
    // sqrt the number
      a = calculation[i -1];
      b = calculation[i +1];
      pemdasVal = operators.sqrt(a, b);
      calculation.splice(indexSqrt -1, 3, pemdasVal);
      i -= 2;
      console.log(calculation);
      }
    }
  }

  // if there is a x or a / or a %
  for (let i = 0; i < calculation.length; i++) {
  // find numbers whose index = x or /
  if ((calculation[i] === 'x') || (calculation[i] === '/') || (calculation[i] === '%')) {
    let indexMultiply = calculation.indexOf('x');
    let indexDivide = calculation.indexOf('/');
    let indexMod = calculation.indexOf('%');

    // if there is only multiplication
    if (indexMultiply != -1 && indexDivide === -1 && indexMod === -1){
    // multiply indexes on right  and left of 'x' string
    a = calculation[i -1];
    b = calculation[i +1];
    pemdasVal = operators.multiply(a, b);
    calculation.splice(indexMultiply -1, 3, pemdasVal);
    i -= 2;
    console.log(calculation);
    // if there is only division
    } else if (indexMultiply === -1 && indexDivide != -1 && indexMod === -1) {
    //divide
    a = calculation[i -1];
    b = calculation[i +1];
    pemdasVal = operators.divide(a, b);
    calculation.splice(indexDivide -1, 3, pemdasVal);
    i -= 2;
    console.log(calculation);
    } else if (indexMultiply === -1 && indexDivide === -1 && indexMod != -1) {
      a = calculation[i -1];
      b = calculation[i +1];
      pemdasVal = operators.modulo(a, b);
      calculation.splice(indexMod -1, 3, pemdasVal);
      i -= 2;
      console.log(calculation);
    }
  } // closing out x & / if statement
} // closing out for loop

  // if there is a + or a - -- put this second since addition and subtraction come last
  for (let i = 0; i < calculation.length; i++) {
  // find numbers whose index = + or -
  if ((calculation[i] === '+') || (calculation[i] === '-')) {
    let indexAdd = calculation.indexOf('+');
    let indexSubtract = calculation.indexOf('-');

  // if there is only addition
  if (indexAdd != -1 && indexSubtract === -1) {
    // add indexes on right and left of '+'
    a = calculation[i -1];
    b = calculation[i +1];
    pemdasVal = operators.addition(a, b);
    calculation.splice(indexAdd -1, 3, pemdasVal);
    i -= 2;
    console.log(calculation);
    // if there is only subtraction
    } else if (indexAdd === -1 && indexSubtract != -1) {
    // subtract indexes on right and left of '-'
    a = calculation[i -1];
    b = calculation[i +1];
    pemdasVal = operators.subtract(a, b);
    calculation.splice(indexSubtract -1, 3, pemdasVal);
    i -= 2;
    console.log(calculation);
    }
  } // closes if statement for + and -
} // closes out for loop
  let content = pemdasVal;
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
