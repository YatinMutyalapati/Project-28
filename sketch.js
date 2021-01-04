const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var ground
	var boyimage;
function preload()
{
	
	boyimage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);
	boy=createSprite(100,665,20,20);
	ground=createSprite(400,685,width/2,20)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 mango1=new Mango(200,300,10,10);
	 mango2=new Mango(300,200,10,10);
	 mango3=new Mango(400,100,10,10);
	 Engine.run(engine);



function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  mango2.display();
  mango3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(mango1.body,mango1.body.position,{x:85,y:-85});
  
	}
}
}
