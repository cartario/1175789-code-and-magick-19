'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var BAR_GAP = 40;
var BAR_WIDTH = 50;
var TEXT_HEIGHT = 50;
var barHeight = CLOUD_HEIGHT-GAP-GAP-2*TEXT_HEIGHT;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function (arr) {
  var maxElement = arr [0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X+GAP, CLOUD_Y+GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');



  ctx.fillStyle = 'rgba(255, 0, 0, 1)';

   var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length ; i++) {
    ctx.fillText(Math.floor(times[i]), CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*i, CLOUD_HEIGHT-barHeight-3*GAP);
    ctx.fillText(players[i], CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*i, CLOUD_HEIGHT);
    ctx.fillRect(CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*i, CLOUD_HEIGHT-FONT_GAP, BAR_WIDTH, -barHeight*times[i]/maxTime);

  };

  // ctx.fillStyle = 'red';
  // ctx.fillText(playerName, CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT-FONT_GAP, BAR_WIDTH, -barHeight);

  // var playerIndex = 1;
  // var playerName = 'Кекс';

  // ctx.fillStyle = 'blue';
  // ctx.fillText(playerName, CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT-FONT_GAP, BAR_WIDTH, -barHeight);

  // var playerIndex = 2;
  // var playerName = 'Катя';

  // ctx.fillStyle = 'lightgrey';
  // ctx.fillText(playerName, CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT-FONT_GAP, BAR_WIDTH, -barHeight);

  // var playerIndex = 3;
  // var playerName = 'Игорь';

  // ctx.fillStyle = 'grey';
  // ctx.fillText(playerName, CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT);
  // ctx.fillRect(CLOUD_X+GAP+(BAR_WIDTH+BAR_GAP)*playerIndex, CLOUD_HEIGHT-FONT_GAP, BAR_WIDTH, -barHeight);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили! ', CLOUD_X+GAP, TEXT_HEIGHT);
  ctx.fillText('Список результатов: ', CLOUD_X+GAP, TEXT_HEIGHT+FONT_GAP);
};
