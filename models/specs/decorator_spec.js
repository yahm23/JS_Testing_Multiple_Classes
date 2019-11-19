const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');



// - be able to paint room if has enough paint in stock

describe('Decorator',function(){

  let decorator;
  let paintCan1;
  let paintCan2;
  let room1;
  let room2;

  beforeEach(function(){
    decorator = new Decorator;
    paintCan1 = new Paint(10);
    paintCan2 = new Paint(15);
    room1 = new Room(10);
    room2 = new Room(30);
  })

  it('should start with an empty paint stock', function(){
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 0)
  })

  it('should add a can of paint to stock', function(){
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan2);
    const actual = decorator.paintStock.length;
    assert.strictEqual(actual, 2)
  })

  it('should be able to calculate total litres of paint', function(){
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan2);
    const actual = decorator.paintVolume();
    assert.strictEqual(actual, 25)
  })

  it('should be able to calculate whether is has enough paint to paint a room', function(){
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan2);
    const actual = decorator.canPaint(room1);
    const actual2 = decorator.canPaint(room2);
    assert.strictEqual(actual, true)
    assert.strictEqual(actual2, false)
  })

  it('should be able to paint a room if enough paint exists', function(){
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan2);
    decorator.canPaint(room1);
    decorator.canPaint(room2);
    const actual = room1.paintedStatus;
    const actual2 = room2.paintedStatus;
    assert.strictEqual(actual, true)
    assert.strictEqual(actual2, false)
  })




})
