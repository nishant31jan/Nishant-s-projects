
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var world;
var down, leftside, rightside;
function preload()
{
	
}

function setup() {
	createCanvas(1550, 750);

	engine = Engine.create();
	world = engine.world;

	down = new Ground(775,730,1550,20);
	leftside = new Ground(1110,680,10,100);
	rightside = new Ground(1310,680,10,100);



	var options={
		isStatic:false,
		restitution:0,
		friction:0,
		density:1.2
	};
	
	
	

	//Create the Bodies Here.
	ball=Bodies.circle(100,400,10,options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

  
}


function draw() {
  
  background(51);

  down.show();
  leftside.show();
  rightside.show();
  ellipse(ball.position.x,ball.position.y,20)
  
	Engine.update(engine);

 drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-25})
	}
}


