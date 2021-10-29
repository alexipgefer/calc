const isNum = (num) => {
	if (isNaN(num)) {
		return 'Error'
	}
	if (typeof num === 'number' && num !== Infinity && num !== -Infinity) {
        return num;
	}
	return 'Error'
}
const calc = (mathOperation, num1, num2) => {
    let result;
    if ('mathOperation' === 'sum') {
        result = num1 + num2;
    }
    else if (mathOperation === 'sub') {
        result = num1 - num2;
    }
    else if (mathOperation === 'multi') {
        result = num1 * num2;
    }
    else if (mathOperation === 'div') {
        result = num1 / num2;
    }
    else if (mathOperation === 'pow') {
        result = num1 ** num2;
    }
    else if (mathOperation === 'RemDiv') {
        result = num1 % num2;
    }
    else {
        return 'Error';
    }
    return isNum(result);
};
