var expect = require('chai').expect;

describe('alignment', function () {
    it('vertical_middle should place block in center', function () {
        var offset, outerHeight;
        return browser
            .url('/')
            .getLocation('#vmiddle', 'y')
            .then(function (location) {
                offset = location;
            })
            .getLocation('#vmiddle-inner', 'y')
            .then(function (location) {
                offset = location - offset;
            })
            .getElementSize('#vmiddle', 'height')
            .then(function (size) {
                outerHeight = size;
            })
            .getElementSize('#vmiddle-inner', 'height')
            .then(function (size) {
                expect(parseInt((outerHeight - size) / 2)).to.equal(offset)
            });
    });
})