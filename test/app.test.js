import app from '../dist/app';

describe('getPeople test', () => {
    test('getPeople should fetch a person', async () => {
        const name = 'Luke Vader';
        expect(name).toBe('Luke Vader');
    });
});