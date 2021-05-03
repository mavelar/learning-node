const msg = require('../dist/msg');

describe('/msg', () => {
    test('Hello World', () => {
        expect(msg.msg()).toBe('Hello World');
    });
})

describe('/is_valid', () => {
    test('Is Valid', () => {
        expect(msg.is_valid(true)).toBe(true);
    });
})