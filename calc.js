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
    switch (mathOperation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'multi':
            result = num1 - num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'pow':
            result = num1 ** num2;
            break;
        case 'remOfDiv':
            result = num1 % num2;
            break;
        default:
            return 'unknown opertion'
    }
    return isValidNum(result);
};