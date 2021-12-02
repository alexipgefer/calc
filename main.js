import {clearScreen, screen, deleteNum, numbers, operators, equals} from './view.js';

let num1;
let num2;
let operator;

clearScreen.addEventListener("click", function () {
  screen.textContent = 0;
  num1 = null;
  num2 = null;
  operator = null;
});

deleteNum.addEventListener("click", function () {
  if (screen.textContent.length === 1) {
    screen.textContent = 0;
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (screen.textContent === "0") {
      screen.textContent = numbers[i].textContent;
    } else {
      screen.textContent += numbers[i].textContent;
    }
  });
}

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", function () {
    operator = operators[j].value;
    num1 = +screen.textContent.slice(0, 3);
    screen.textContent = 0;
  });
}

equals.addEventListener("click", function () {
  num2 = +screen.textContent.slice(0, 3);
  screen.textContent=calc(operator, num1, num2);
  }
);

const isValidNum = (num) => {
  
  if (isNaN(num)) {
    return 'Error'
  }
  if (typeof (num) === 'number' && num !== Infinity) {
    return num.toFixed(1);
  }
  return 'Error'
}

const calc = (operator, num1, num2) => {
  let result;
  switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
      result = num1 * num2;
        break;
    case '/':
      result = num1 / num2;
      
      break;
}
return   isValidNum(result); 
};
