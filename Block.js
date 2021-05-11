class Block{
constructor(x,y,width,height){
    var option = {
        restitution :0.4,
        friction :1.0,
        isStactic:true,
    }

    this.body = Bodies.rectangle(x,y,width,height,option);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

}
 
   display(){

    var angle = this.body.angle;
    var pos = this.body.position

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTRE);
    rect(0,0,this.width,this.height);
    pop();
   }

}