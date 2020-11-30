class Boxes{
    constructor(x,y,w,h){
        var options={
            //isStatic:true,
            restitution:0.4,
            friction:0
        }
   
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(this.x,this.y,this.w,rect.h,options);
World.add(world,this.body);

 }

 display() { 
     var BPos=this.body.position; 
     var angle=this.body.angle;
     push();
     rotate(angle);
     translate(BPos.x, BPos.y);
     fill("black") ;
      rectMode(CENTER); 
      rect(0,0,this.width,this.height)
      pop() ;
 }