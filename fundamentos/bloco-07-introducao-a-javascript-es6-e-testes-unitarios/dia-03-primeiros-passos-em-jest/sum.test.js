const sum = require('./sum');

describe('function sum test', () => {
    it('return sum result', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);

    });
    it('throw an error if the parameter is string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
    })
});




