function sum(a, b) {
    return a + b;
}

function returnTwo() {
    return 2;
}

function returnFive() {
    return 5;
}

function returnTwoFive() {
    return returnTwo()+returnFive();
}

module.exports = {sum,returnTwo,returnFive,returnTwoFive};