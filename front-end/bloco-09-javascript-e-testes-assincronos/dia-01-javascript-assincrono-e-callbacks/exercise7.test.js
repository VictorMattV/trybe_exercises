const { uppercase } = require('./exercise7')

it('uppercase "test" to equal "TEST"', (done) => {
    uppercase('test', (str) => {
        try {
            expect(str).toBe('TEST');
            done();
        } catch (error) {
            done(error);
        }
    });
});