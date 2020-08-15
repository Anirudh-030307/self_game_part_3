var canvas , car , carIMG ; 
var play , tutorial , back ,left , right , leftIMG , rightIMG ;
var gameState=0
var bg1 , road , roadIMG ;

function preload() {
  carIMG = loadImage('images/ezgif.com-crop (1).png');
  leftIMG = loadImage('images/ezgif.com-rotate.png');
  rightIMG = loadImage('images/ezgif.com-rotate (1).png');


}
function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);

  play = createSprite(600,500,60,20);
  tutorial = createSprite(500,500,60,20);

  back = createSprite(600,400,60,20);
  back.visible = false;

  left= createSprite(1100,490,60,20);
  left.addImage(leftIMG);
  left.scale = 0.5; 
  left.visible = false;

  right= createSprite(1200,490,60,20);
  right.addImage(rightIMG);
  right.scale = 0.5; 
  right.visible = false;

  car= createSprite(600,500,60,20);
  car.addImage(carIMG);
  car.visible = false;
  
  roadIMG="white";
}

function draw(){
  background(roadIMG);

if (mousePressedOver(tutorial)) {
  play.visible = false;
  tutorial.visible = false;
  fill("red");
  back.visible=true;
  back.shapeColor = "red";
  gameState = 1;
}
if(gameState===1){
  text("sprite",200,200);
}

if (mousePressedOver(back)) {
  gameState=2;
  play.visible = true;
  tutorial.visible = true;
  back.visible = false;
}

if (mousePressedOver(play)) {
  tutorial.visible = false;
  play.visible = false;
  left.visible = true;
  right.visible = true;
  car.visible = true;
  gameState = 2;
}

if (gameState === 2) {
  roadIMG = loadImage('images/track.png');
  controls();  
}

  drawSprites();
  text("X:"+mouseX+"Y:"+mouseY,mouseX,mouseY);
}

function controls() {
  if (mousePressedOver(left)) {
    car.x = car.x - 10;
  } 
  if (mousePressedOver(right)) {
    car.x = car.x + 10;
  } 
}
