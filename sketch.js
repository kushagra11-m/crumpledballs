
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(800,670,1600,20)
paper=new Paper(200,450,70)
	Engine.run(engine);

	d1=new BasketClass(1200,650,200,20)
	d2=new BasketClass(1100,550,20,213)
	d3=new BasketClass(1300,550,20,400)
  
}



function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ground.display()
  
  d1.display()
  paper.display()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200})
	}
}



