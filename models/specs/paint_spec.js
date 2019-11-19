const assert = require('assert');
const Paint = require('../paint.js');


describe('Paint Can', function(){
  let paintCan;

  // - have a number of litres of paint
  // - be able to check if it is empty
  // - be able to empty itself of paint
  beforeEach(function(){
    paintCan = new Paint(10);
  })

  it('have a number of litres of paint', function(){
    const actual = paintCan.volume;
    assert.strictEqual(actual,10);
  })

  it('be able to check if its empty', function(){
    const actual = paintCan.emptyCheck();
    assert.strictEqual(actual,false)
  })

  it('be able to empty itself of paint', function(){
    paintCan.empty();
    const actual = paintCan.emptyCheck();
    assert.strictEqual(actual,true);
  })
})
