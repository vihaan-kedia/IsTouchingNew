var fixedRect, movingRect;
var moving, fixed;
var move1, fix1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  moving = createSprite(200,200,30,30);
  fixed = createSprite(400,400,30,30);
  move1 = createSprite(600,200,30,30);
  fix1 = createSprite(400,600,30,30);
  moving.velocityX=3
  move1.velocityX=-3;
  fixed.velocityX=4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fix1)){
  movingRect.shapeColor = "red";
  fix1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fix1.shapeColor = "green";
}

if(isTouching(move1,moving)){
  move1.shapeColor = "red";
  moving.shapeColor = "red";
}
else{
  move1.shapeColor = "green";
  moving.shapeColor = "green";
}

if(isTouching(fixedRect,fixed)){
  fixedRect.shapeColor = "red";
  fixed.shapeColor = "red";
}
else{
  fixed.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
 drawSprites();
}

