const Paint = function(volume){
  this.volume = volume
}

Paint.prototype.emptyCheck = function () {
  if (this.volume == 0){
    return true;
  }
  else {
    return false;
  }
};

Paint.prototype.empty = function () {
  this.volume = 0
};

module.exports = Paint;
