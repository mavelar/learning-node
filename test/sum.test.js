const {sum,returnTwo,returnFive,returnTwoFive} = require('../dist/sum');

describe('/sum', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
})

describe('/returnTwo', () => {
    test('return 2', () => {
        expect(returnTwo()).toBe(2);
    });
})

describe('/returnFive', () => {
    test('return 5', () => {
        expect(returnFive()).toBe(5);
    });
})

describe('/returnTwoFive', () => {
    test('return 7', () => {
        expect(returnTwoFive()).toBe(7);
    });
})