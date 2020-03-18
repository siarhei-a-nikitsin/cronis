const isIntNumber = (number) => {
    return typeof number === 'number' && !Number.isNaN(Number.parseInt(number));
};

const getBitsNumber = (num1, num2) => {    
    if(!isIntNumber(num1) || !isIntNumber(num2)){
        throw new Error(`The passed arguments (${num1} or ${num2}) are invalid.`);
    }

    let temporaryResult = num1 ^ num2;

    // calculate numbers of '1' from temporaryResult
    let result = 0;

    while(temporaryResult) {
        (temporaryResult & 1) && result++;
        temporaryResult >>= 1;
    }

    return result;
};

// test
const result = getBitsNumber(28, 15);