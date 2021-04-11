const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  
var bg
var engine,world;

function preload(){
bg=loadImage("court.png");

}

function setup(){
createCanvas(600,500);
 engine=Engine.create();
world=engine.world;
ball=new Ball(545,240,40);

basket=new Basket(225,230); 

}
function draw(){    
background(bg);

Engine.update(engine);

ball.display();
basket.display();



}


    function keyPressed() {
        if (keyCode === UP_ARROW) {
          Matter.Body.setStatic(ball.body,false);
          Matter.Body.applyForce(ball.body,ball.body.position,{x:-160,y:-180});
        }
        if(keyCode===32){
            Matter.Body.setPosition(ball.body,{x:545,y:240});
            Matter.Body.setStatic(ball.body,true);
           }
  }

  







