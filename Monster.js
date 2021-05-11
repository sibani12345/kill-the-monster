class Monster {
    constructor(x,y,width,height){
        var option = {
            restitution :0.4,
            friction :1.0,
            isStactic:true,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image + laodImage("Monster-01.png")
        World.add(world,this.body);

    }


     display(){


        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTRE);
        image(this.image,0,0,this.width,this.height);
        pop();
     }





    

    
}