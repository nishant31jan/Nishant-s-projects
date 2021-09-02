var bg, sleep, brush, gym, eat, drink, move, bath;
var b, astronaut;
var w1, w2, w3, w4;
function preload(){
bg=loadImage("iss.png");
sleep=loadAnimation("sleep.png");
brush=loadAnimation("brush.png");
gym=loadAnimation("gym11.png","gym12.png");
eat=loadAnimation("eat1.png","eat2.png");
drink=loadAnimation("drink1.png","drink2.png");
move=loadAnimation("move1.png","move2.png");
bath=loadAnimation("bath1.png","bath2.png")

}

function setup() {
  createCanvas(650,400);

 b=createSprite(330, 200, 50, 50);
 b.addImage("iss",bg);
 b.scale=0.13
 
astronaut=createSprite(300,230);
astronaut.addAnimation("sleep",sleep);
astronaut.scale=0.1;

w1=createSprite(10,200,10,400);
w1.visible=false;
w1.collide(astronaut);

w2=createSprite(10,200,10,400);
w2.visible=false;
w2.collide(astronaut);

w3=createSprite(10,200,10,400);
w3.visible=false;
w3.collide(astronaut);

w4=createSprite(10,200,10,400);
w4.visible=false;
w4.collide(astronaut);



}

function draw() {
  background(255,255,255);
  
  

  if(keyDown("UP")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y=250;
   // astronaut.x=500;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y=340;
   // astronaut.x=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=250;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y=320;
    astronaut.velocityX=1;
    astronaut.velocityY=-1;
    astronaut.collide(w1,w2,w3,w4);
  }
  drawSprites();
  textSize=40;
  text("Instructions:",50,50);
  text("Up arrow = Brushing",50,60)
  text("Down arrow = Gymming",50,70)
   text("left arrow = Eating",50,80)
   text("Right arrow = Bathing",50,90)
   text("M key = Moving",50,100)
}