
var o1, o2, o3, o4, o5, c1, r, gameOver,goimg, b;
var o1img, o2img, o3img, o4img,o5img, c1img;
var o1g, o2g, o3g, o4g,o5g, cg, f1, f2, f1img, f2img, f1g, f2g, f2img, f3, f3img, f3g;
var reef, reefImg, score;
var diver, diverImg;
var END =0;
var PLAY =1;
var gameState = PLAY;

function preload()
{
reefImg=loadImage("background2.jpg");
diverImg=loadAnimation("diver11.png","diver11.png","diver2.png","diver2.png");
o1img=loadImage("bottle.png");
o2img=loadImage("mask.png");
o3img=loadImage("cup.png");
o4img=loadImage("chipsbag.png");
c1img=loadImage("coin.png");
o5img=loadImage("bag.png");
goimg=loadImage("gameover.jpg");
f1img=loadImage("fish.png");
f2img=loadImage("fish2.png");
f3img=loadImage("turtle.png");
}
function setup() 
{             
    createCanvas(400,400);
   
    reef=createSprite(200,200,20,20)
    reef.addImage("reef",reefImg);
    reef.velocityX=2;

    diver=createSprite(355,200,20,20)
        diver.addAnimation("swim",diverImg);
        diver.scale=0.2;
        
        gameOver = createSprite(200,200);
        gameOver.addImage(goimg);
        gameOver.scale = 0.8;
        gameOver.visible = false; 


    score=0;
       
    o1g=new Group();
    o2g=new Group();
    o3g=new Group();
    o4g=new Group();
    c1g=new Group();
    o5g=new Group();
    f1g=new Group();
    f2g=new Group();
    f3g=new Group();
}


function draw() 
{
    //diver.debug=true

    drawSprites();

    if(reef.x > 300)
    {
        reef.x = 200;

    }  
    if(gameState===PLAY)
    {
        
         
        text("score="+score,40,50);
       
        text.depth=reef.depth+1;

        r=Math.round(random(1,9));
    
        diver.y=World.mouseY;
        
        if(o1g.isTouching(diver)){
            o1g.destroyEach();
            score=score+1;
        }   
        if(o2g.isTouching(diver)){
            o2g.destroyEach();
            score=score+1;
        }   
        if(o3g.isTouching(diver)){
            o3g.destroyEach();
            score=score+1;
        }   
        if(o4g.isTouching(diver)){
            o4g.destroyEach();
            score=score+1;
        }   
        if(o5g.isTouching(diver)){
            o5g.destroyEach();
            score=score+1;
        }   
        if(c1g.isTouching(diver)){
            c1g.destroyEach();
            score=score+4;
        }   
        if(f1g.isTouching(diver)){
            gameState = END;
        }
        if(f2g.isTouching(diver)){
            gameState = END;
        }
        if(f3g.isTouching(diver)){
            gameState = END;
        }
        if(frameCount%200==0){
            if(r==1){
                spawnCup();
            }else if(r==2){
                spawnBottle();
            }else if(r==3){
                spawnMask();
            }else if(r==4){
                spawnchipsBag();
            }else if(r==5){
                spawnBag();
            }else if(r==6){
                spawnFish();
            }else if(r==7){
                spawnFish2();
            }else if(r==8){
                spawnFish3();
            }
            else{
                spawnCoin();
            }
            console.log(r);
              
        }      
             
    
  
 }
 else if(gameState ===END){
    gameOver.visible = true;
    text("Press up arrow to restart the game!",110,330);
     o1g.destroyEach();
     o2g.destroyEach();
     o3g.destroyEach();
     o4g.destroyEach();
     o5g.destroyEach();
     c1g.destroyEach();
     f1g.destroyEach();
     f2g.destroyEach();
     f3g.destroyEach();
    diver.visible=false;

     reef.velocityX=0; 
    
     if(keyDown ("UP")){
        reset();
      } 
}
}


function spawnBottle(){
if(frameCount%200==0){
o1=createSprite(-10,Math.round(random(50,350)),40,40);
o1g.add(o1);
o1.velocityX=2;
o1.addImage("bottle",o1img);
o1.scale=0.05;

}
}
function spawnMask(){
    if(frameCount%200==0){
    o2=createSprite(-10,Math.round(random(50,350)),40,40);
    o2g.add(o2);
    o2.velocityX=2;
    o2.addImage("mask",o2img);
    o2.scale=0.09;
    
    }
    }
    function spawnCup(){
        if(frameCount%200==0){
        o3=createSprite(-10,Math.round(random(50,350)),40,40);
        o3g.add(o3);
        o3.velocityX=2;
        o3.addImage("cup",o3img);
        o3.scale=0.05;
        
        }
    }
        
    function spawnchipsBag()
    {
            if(frameCount%200==0)
            {
            o4=createSprite(-10,Math.round(random(50,350)),40,40);
            o4g.add(o4);
            o4.velocityX=2;
            o4.addImage("chips",o4img);
            o4.scale=0.15;
            }
    }
    
    function spawnCoin()
    {
                if(frameCount%200==0)
                {
                c1=createSprite(-10,Math.round(random(50,350)),40,40);
                c1g.add(c1);
                c1.velocityX=2;
                c1.addImage("coin",c1img);
                c1.scale=0.03;
                
                }
    }
                
    function spawnBag()
    {
                    if(frameCount%200==0)
                    {
                    o5=createSprite(-10,Math.round(random(50,350)),40,40);
                    o5g.add(o5);
                    o5.velocityX=2;
                    o5.addImage("bag",o5img);
                    o5.scale=0.05;
                    }
    }
                    
    function spawnFish()
    {
                        if(frameCount%200==0){
                        f1=createSprite(-10,Math.round(random(50,350)),40,40);
                        f1g.add(f1);
                        f1.velocityX=2;
                        f1.addImage("fish",f1img);
                        f1.scale=0.05;
                        }
    }
                        
    function spawnFish2()
    {
                            if(frameCount%200==0){
                            f2=createSprite(-10,Math.round(random(50,350)),40,40);
                            f2g.add(f2);
                            f2.velocityX=2;
                            f2.addImage("fish2",f2img);
                            f2.scale=0.2;
                            }
    }
    function spawnFish3()
    {
                            if(frameCount%200==0){
                            f3=createSprite(-10,Math.round(random(50,350)),40,40);
                            f3g.add(f3);
                            f3.velocityX=2;
                            f3.addImage("fish3",f3img);
                            f3.scale=0.05;
                            }
    }
    function reset(){
        gameState = PLAY;
        gameOver.visible = false;
        diver.visible=true;
        score=0;
        reef.velocityX=2;
        
      }                      
 