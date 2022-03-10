const expect = require('chai').expect;

describe('Array', () => {
    describe('#sort', () => {
        it('should sort the array by name', () => {
            var names = ['Amy', 'Beth'];
            expect(names.sort()).to.be.eql(['Amy', 'Beth']);
        });
    });
});