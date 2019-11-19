const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  // - have an area in square meters
  // - should start not painted
  // - should be able to be painted

  let room;
  beforeEach(function(){
    room = new Room(10);
  })

  it('should have an area (in square meters)', function(){
    const actual = room.area;
    assert.strictEqual(actual,10)
  })

  it('should start of un-painted', function(){
    const actual = room.paintedStatus;
    assert.strictEqual(actual,false)
  })

  it('should be able to be painted', function(){
    room.paint();
    const actual = room.paintedStatus;
    assert.strictEqual(actual, true);
  })

  

})
