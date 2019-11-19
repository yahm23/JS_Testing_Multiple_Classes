const Paint = require('./paint.js');
const Room = require('./room.js');


const Decorator = function(){
  this.paintStock = [];
}

Decorator.prototype.addCan = function (can) {
  this.paintStock.push(can);
};

Decorator.prototype.paintVolume = function () {
  let vol=0
  for (can of this.paintStock){
    vol += can.volume
  }
  return vol
};

Decorator.prototype.canPaint = function (room) {
  if (room.area < this.paintVolume() ){
    room.paint();
    let canOrder = []
    // for (can of this.paintStock){
    //   canOrder.push(can.volume);
    //   canOrder.sort();
    // }
    return true;
  }
  else {
    return false;
  }

};

// room1 = new Room(12);
// decorator = new Decorator;
// paintCan1 = new Paint(10);
// paintCan2 = new Paint(15);
//
// decorator.addCan(paintCan1);
// decorator.addCan(paintCan2);
// // const actual = decorator.canPaint(room1);
// console.log('paint vol: ',decorator.paintVolume());
// console.log('area: ',room1.area);


module.exports = Decorator;
