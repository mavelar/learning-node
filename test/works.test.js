const works = require('../dist/works');

describe('/works', () => {
    test('Pick a job', () => {
        expect(works.pickAJob(2)).toBe('Doctor');
    });

    test('Pick a job', () => {
        expect(works.pickAJob(4)).toBe('Doctor');
    });
})