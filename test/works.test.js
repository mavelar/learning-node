const works = require('../dist/works');

describe('/works', () => {
    test('Pick a job', () => {
        expect(works.pickAJob(4)).toBe('Doctor');
    });
})

describe('/pick-a-car', () => {
    test('Pick a car', () => {
        expect(works.pickACar(1)).toBe('Toyota');
    });
})