function Element() {
  var gameUI = GameUI.getInstance();

  var element = new Image();
  element.src = 'images/elements.png';

  this.type;
  this.sX = 0;
  this.sY = 0;
  this.x;
  this.y;
  this.width = MarioSettings.tileSize;
  this.height = MarioSettings.tileSize;

  var that = this;

  this.platform = function() {
    that.type = 1;
    that.sX = 0;
    that.sY = 0;
  };

  this.coinBox = function() {
    that.type = 2;
    that.sX = 1 * that.width;
    that.sY = 0;
  };

  this.powerUpBox = function() {
    that.type = 3;
    that.sX = 2 * that.width;
    that.sY = 0;
  };

  this.uselessBox = function() {
    that.type = 4;
    that.sX = 3 * that.width;
    that.sY = 0;
  };

  this.flagPole = function() {
    that.type = 5;
    that.sX = 4 * that.width;
    that.sY = 0;
  };

  this.flag = function() {
    that.type = 6;
    that.sX = 5 * that.width;
    that.sY = 0;
  };

  this.pipeLeft = function() {
    that.type = 7;
    that.sX = 6 * that.width;
    that.sY = 0;
  };

  this.pipeRight = function() {
    that.type = 8;
    that.sX = 7 * that.width;
    that.sY = 0;
  };

  this.pipeTopLeft = function() {
    that.type = 9;
    that.sX = 8 * that.width;
    that.sY = 0;
  };

  this.pipeTopRight = function() {
    that.type = 10;
    that.sX = 9 * that.width;
    that.sY = 0;
  };

  this.toad = function() {
    that.type = 15;
    that.sX = 10 * that.width;
    that.sY = 0;
  };

  this.yoshi = function() {
    that.type = 11;
    that.sX = 0;
    that.sY = 1 * that.width;
  };

  this.star = function() {
    that.type = 12;
    that.sX = 1 * that.width;
    that.sY = 1 * that.width;
  };

  this.coin = function() {
    that.type = 13;
    that.sX = 2 * that.width;
    that.sY = 1 * that.width;
  };

  this.piranha = function() {
    that.type = 14;
    that.sX = 11 * that.width;
    that.sY = 0;
  };

  this.castle = function(t) {
    that.type = t;
    that.sX = (3 + t - 30) * that.width;
    that.sY = 1 * that.width;
  };

  this.draw = function() {
    gameUI.draw(element, that.sX, that.sY, that.width, that.height, that.x, that.y, that.width, that.height);
  };
}
