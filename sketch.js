var box1Object;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

  
  log1=new Log(532,649,200,35)
  log2=new Log(733,649,200,35)
  log3=new Log(635,695,20,200)
	 ground = new Ground(600,height,1200,20)
   box1 = new Box(60,320,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  fill("blue");
  ground.display();
    log1.display();
    log2.display();
    log3.display();
    box1.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){

	Matter.Body.applyForce(box1.body,box1.body.position,{x:85,y:-85});
}

}