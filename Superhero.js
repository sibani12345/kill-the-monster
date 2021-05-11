class Superhero {
    counstructer(x,y,width,height){
        var option = {
            isStactic : true,
           restitution : 0,
            friction :1,
            density :1.2,

        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image + laodImage("Superhero-01.png")
        World.add(world,this.body);
    }

    display(){

        var angle = this.body.angle;
        var pos = this.body.position
    
        push();
        translate(pos.x,pos.y);
        imageMode(CENTRE);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}