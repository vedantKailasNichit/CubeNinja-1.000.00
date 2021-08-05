var player, canvas, ground, jump = 12, pl1, pl2;
var p, p2, g, plI1, plI2;

function preload(){
 p = loadImage("player.png");
 g = loadImage("ground.png");
 s = loadImage("sky.png");
 p2 = loadImage("player2.png");
 plI1 = loadImage("pl1.png");
}
function setup(){
  canvas = createCanvas(1318, 625);
  player = createSprite(width/2,200,30,40);
  player.addAnimation("Player1",p)
  player.addAnimation("Player2",p2)
  rotate(PI / 3.0);
  ground = createSprite(width/2,height-10,width*2,30);
  ground.addImage("Ground",g);
  angleMode(DEGREES);
  pl1 = createSprite(150,500,300,200);
  pl1.addImage("Pl1",plI1);

}
function draw(){
  background(s);
  
  Gravity();
  drawSprites();
}

function Gravity(){

  if(player.isTouching(ground) || player.isTouching(pl1)){
    player.velocityY = 0;
    player.collide(ground);

    if(keyDown(UP_ARROW)){
      player.velocityY = jump * -1;
    }    
  }
  else{
    player.velocityY = player.velocityY + 0.8;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x += 13;
    player.changeAnimation("Player1", p);
  }

  if(keyDown(LEFT_ARROW)){
    player.x += 13 * -1;
    player.changeAnimation("Player2", p2);
  }
}