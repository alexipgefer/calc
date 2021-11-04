const isValidNum = (num) => {
    if (isNaN(num)) {
        return 'Error'
    }
    if (typeof (num) === 'number' && num !== Infinity) {
        return num;
    }
    return 'Error'
}

const calc = (mathOperation, num1, num2) => {
  let result;
    let operation = {
        sum: num1 + num2,
        sub: num1 - num2,
        multi: num1 * num2,
        div: num1 / num2,
    } 
    if ( mathOperation in operation ) {
      result = operation[mathOperation];
    } else {
    return 'unknown operation';
}
return isValidNum(result)
};
