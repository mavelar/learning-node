const {sum,returnTwo} = require('../dist/sum');

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