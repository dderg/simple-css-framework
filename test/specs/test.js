var expect = require('chai').expect;

describe('alignment', function () {
    it('should have margins not summed', function () {
        var offset, outerHeight;
        return browser
            .url('/')
            .getLocation('#vmiddle', 'y')
            .then(function (location) {
                offset = location;
            })
            .getLocation('#vmiddleInner', 'y')
            .then(function (location) {
                offset = location - offset;
            })
            .getElementSize('#vmiddle', 'height')
            .then(function (size) {
                outerHeight = size;
            })
            .getElementSize('#vmiddleInner', 'height')
            .then(function (size) {
                expect(outerHeight - size).to.equal(offset / 2)
            });

    });
})