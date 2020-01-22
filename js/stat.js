'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = 'red';
  ctx.fillText('Я', 150, 270);
  ctx.fillRect(150, 250, 40, -100);

  ctx.fillStyle = 'blue';
  ctx.fillText('Кекс', 150+40+50, 270);
  ctx.fillRect(150+40+50, 250, 40, -150);

  ctx.fillStyle = 'lightgrey';
  ctx.fillText('Катя', 150+40+50+50+40, 270);
  ctx.fillRect(150+40+50+50+40, 250, 40, -50);

  ctx.fillStyle = 'grey';
  ctx.fillText('Игорь', 150+40+50+50+50+40+40, 270);
  ctx.fillRect(150+40+50+50+50+40+40, 250, 40, -60);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили! ', 110, 40);
  ctx.fillText('Список результатов: ', 110, 60);
};
