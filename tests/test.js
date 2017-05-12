import example from '../index.js';

describe(`example test`, function () {
    it(`should test something`, function () {
        expect(example()).to.equal(2);
    });
});