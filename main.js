// intial variables for calculations
let runningTotal = 0;
let bufferNumber = '';
let variablesAndOperators = '';
let operator;


// selected variables for dom
let displayInput = document.querySelector('.input');
let displayResult = document.querySelector('.result');


//initializing function to execute when a button of digit or equal is clicked
document
  .querySelector(".keys")
  .addEventListener("click", function(event) {
    checkValue();
  });

//initializing function to execute when a button of digit or equal is clicked
document
  .querySelector(".operators")
  .addEventListener("click", function(event) {
    checkSymbol();
  });

function checkValue() {
  // check if input is = or . or number
  if (isNaN(parseInt(event.target.innerText)) && event.target.innerText !== '.') {
    // here is the when we press equal
    bufferNumber = runningTotal.toString();
    variablesAndOperators = runningTotal.toString();
    displayInput.innerText = bufferNumber;
    displayResult.innerText = "";

  } else {
    // update input and output dispalays
    displayInput.innerText = bufferNumber + event.target.innerText;
    bufferNumber = bufferNumber + event.target.innerText;
    variablesAndOperators = variablesAndOperators + event.target.dataset.key;
    calculate();
  }
}
function checkSymbol(){
      // here we must delete a digit
  if (event.target.innerText === 'DEL') {

    if (bufferNumber.length === 1 && variablesAndOperators.length === 1 ){
      bufferNumber = '';
      variablesAndOperators='';
      runningTotal = 0;
      displayInput.innerText = bufferNumber;
      displayResult.innerText = variablesAndOperators;
    }else{
      bufferNumber = bufferNumber.slice(0, -1);
      variablesAndOperators = variablesAndOperators.slice(0, -1);
    }
    // then display it
    displayInput.innerText = bufferNumber;
    if (!isNaN(variablesAndOperators.charAt(variablesAndOperators.length-1)) && bufferNumber.length >= 1){
      calculate();
    }

  } else {
    if (bufferNumber.length !== 0  || event.target.innerText !== '÷' && event.target.innerText !== 'x'){
      operator = event.target.innerText;
      displayInput.innerText = bufferNumber + event.target.innerText;
      bufferNumber = bufferNumber + event.target.innerText;
      variablesAndOperators = variablesAndOperators + event.target.dataset.key;

    }
  }
}

function calculate() {
  // calculate and print the result
  runningTotal = eval(variablesAndOperators);
  displayResult.innerText = runningTotal;
}
