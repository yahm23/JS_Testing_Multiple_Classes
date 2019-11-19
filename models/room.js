const Room = function (area){
  this.area = area;
  this.paintedStatus = false;
}


Room.prototype.paint = function(){
  this.paintedStatus = true;
};



let room = new Room(10);
room.paint

console.log(room);

module.exports = Room;
