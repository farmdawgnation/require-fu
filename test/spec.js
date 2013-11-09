var assert = require('assert'),
    requirefu = require('../lib');

describe("require-fu", function() {
  it("should correctly recursively require all folders", function() {
    var bacon = {};

    requirefu("./test/examplemodule")(bacon);

    assert.equal(1, bacon.sammich);
    assert.equal(5, bacon.awesome);
    assert.equal(6, bacon.wheeeee);
    assert.equal(99, bacon.zoooom);
  });
});
