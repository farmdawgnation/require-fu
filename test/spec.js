var assert = require('assert'),
    requireFu = require('../lib');

describe("require-fu", function() {
  it("should correctly recursively require all folders and inject bacon", function() {
    var bacon = {};

    requireFu(__dirname + "/examplemodule")(bacon);

    assert.equal(1, bacon.sammich);
    assert.equal(5, bacon.awesome);
    assert.equal(6, bacon.wheeeee);
    assert.equal(99, bacon.zoooom);
  });
});
