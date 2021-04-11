class Ball{
constructor(x,y,r){

var options={
    isStatic:true,
    density:1,
    friction:0.5,
    restituion:0.5
}
this.image=loadImage("ball.png");
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
//rotate(this.body.angle);

imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();

}
}