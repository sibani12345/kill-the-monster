
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  superhero = new Superhero(400,800,250);
  rope = new Throw(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  block1 = new Block(600, 100, 70, 70);
  block2 = new Block(900, 100, 70, 70);
  block3 = new Block(900, 100, 70, 70);
  block4 = new Block(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()

  superherohero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPostition(hero.body,{x:mouseX,y:mouseY});
}

function mouseRelesed(){
  attach.fly();
}






