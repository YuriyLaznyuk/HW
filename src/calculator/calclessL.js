let digit = document.querySelectorAll(".digit");
let operator = document.querySelectorAll(".oper");
let rezT = document.getElementById("rez");
let c = document.getElementById("c");
let ce = document.getElementById("ce");
let display = document.getElementById("disp");
let point = document.getElementById("poi");
let memoryDigitA;
let memoryDigitB;
let memoryOperator = "";
let flagOperator = false;
let flagPoint = true;

for (let index = 0; index < digit.length; index++) {
  const elementDigit = digit[index];
  elementDigit.addEventListener("click", function(e) {
    clickDigit(e.target.value);
  });
}

for (let index = 0; index < operator.length; index++) {
  const elementOperator = operator[index];
  elementOperator.addEventListener("click", function(e) {
    clickOperator(e.target.value);
  });
}

point.addEventListener("click", function(e) {
  clickPoint(e.target.value);
});
rezT.addEventListener("click", clickRezult);
c.addEventListener("click", clickClear);
ce.addEventListener("click", clickCE);

function clickDigit(digit) {
  if (flagOperator == true) {
    if (memoryDigitB == undefined) {
      display.value = digit;
      memoryDigitB = display.value;
    } else {
      display.value = memoryDigitB + digit;
      memoryDigitB = display.value;
    }
  } else {
    if (memoryDigitA == undefined) {
      display.value = digit;
      memoryDigitA = display.value;
    } else {
      display.value = memoryDigitA + digit;
      memoryDigitA = display.value;
    }
  }
}
function clickPoint(point) {
  if (flagPoint == false) {
    return;
  } else if (flagOperator == true) {
    if (memoryDigitB == undefined) {
      return;
    } else {
      display.value = memoryDigitB + point;
      memoryDigitB = display.value;
      flagPoint = false;
    }
  } else {
    if (memoryDigitA == undefined) {
      return;
    }
    else{
      display.value=memoryDigitA+point;
      memoryDigitA=display.value;
      flagPoint=false;
    }
  }
}
function clickOperator(operator) {
  memoryOperator = operator;
  flagOperator = true;
  display.value = "";
  flagPoint = true;
}

function clickRezult() {
  display.value = calcRezult(memoryDigitA, memoryDigitB, memoryOperator);
  memoryDigitA = undefined;
  memoryDigitB = undefined;
  memoryOperator = "";
  flagOperator = false;
  flagPoint=true;
}
function clickClear() {
  memoryDigitA = undefined;
  memoryDigitB = undefined;
  memoryOperator = "";
  flagOperator = false;
  display.value = "0";
  flagPoint=true;
}
function clickCE() {
  if (display != 0) {
    let x = display.value;

    display.value = x.slice(0, x.length - 1);
    if (flagOperator === true) {
      memoryDigitB = display.value;
    } else memoryDigitA = display.value;
  }
}

function calcRezult(a, b, c) {
  switch (c) {
    case "+":
      return parseFloat(a) + parseFloat(b);
      break;
    case "-":
      return parseFloat(a) - parseFloat(b);
    case "*":
      return parseFloat(a) * parseFloat(b);
    case "/":
      return parseFloat(a) / parseFloat(b);

    default:
      break;
  }
}
