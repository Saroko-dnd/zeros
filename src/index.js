const countPowers = (number, numberForExponentiation) => {
    let result = 0;
    let power = 1;
    let expResult = Math.pow(numberForExponentiation, power);

    while (expResult <= number) {
        result += Math.floor(number / expResult);
        ++power;
        expResult = Math.pow(numberForExponentiation, power);
    }

    return result;
};

module.exports = number => {
    let powersOfFive = 0;
    let powersOfTwo = 0;

    powersOfFive = countPowers(number, 5);
    if (powersOfFive) {
        powersOfTwo = countPowers(number, 2);
    }

    return powersOfFive <= powersOfTwo ? powersOfFive : powersOfTwo;
};
