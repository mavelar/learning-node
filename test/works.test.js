const works = require('../dist/works');

describe('/works', () => {
    test('Pick a job', () => {
        expect(works.pickAJob(4)).toBe('Doctor');
    });
})