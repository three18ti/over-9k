var assert = require('assert');
let over9000 = require('../lib/index.js')

describe('over9000', function() {
  describe('over 9k?', function() {
    it('returns true when the value is over 9000', function() {
      assert.equal(over9000(9001), true)
    }),
    it('returns false when the value is under 9000', function() {
      assert.equal(over9000(8999), false)
    })
    it('returns false when the value is equal to 9000', function() {
      assert.equal(over9000(9000), false)
    })
  })
})
