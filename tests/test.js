import {expect} from 'chai';
import sinon from 'sinon';

import example from '../index.js';

describe(`example test`, function () {
    it(`should test something`, function () {
        expect(example()).to.equal(2);
    });
    it(`should test with sinon`, function () {
        const spy = sinon.spy();
        spy();
        expect(spy.callCount).to.equal(1);
    });
});