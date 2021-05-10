const msg = require('../dist/msg');

describe('/msg', () => {
    test('Hello World', () => {
        expect(msg.msg('Hello World')).toBe('Hello World');
    });
})

describe('/is_valid', () => {
    test('Is Valid', () => {
        expect(msg.is_valid(true)).toBe(true);
    });
})

describe('/say_hi', () => {
    test('Say Hi', () => {
        expect(msg.say_hi('Manuel')).toBe('Hi Manuel!');
    });
})

describe('/say_bye', () => {
    test('Say Bye', () => {
        expect(msg.say_bye('Manuel')).toBe('Good bye Manuel!');
    });
})

describe('/say_something', () => {
    test('Say Something', () => {
        expect(msg.say_something('Hello World')).toBe('Hello World');
    });
})

describe('/emotion', () => {
    test('Any Emoji', () => {
        expect(msg.emotion('happy')).toBe(false);
    });
})