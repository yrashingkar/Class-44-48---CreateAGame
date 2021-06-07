var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var shooters, shooter1, shooter2

var bullets, bullet2, bullet1

function preload(){
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  //background(255,255)
  database = firebase.database();
  bullet1 = createSprite(10,10,10,50)
  bullet2 = createSprite(100,10,10,50)
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function keyPressed(){
  if(keyCode===32){
    bullet1.velocityX=15
    bullet2.velocityX=-15
  }
}