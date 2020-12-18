
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1= new Stone(235,420,35);
ground1 = new Ground(400,615,800,100);
mango1= new Mango(600,300,20);
mango2= new Mango(500,300,20);
mango3= new Mango(650,350,20);
mango4= new Mango(500,400,20);
mango5= new Mango(550,400,20);
mango6= new Mango(650,300,20);
mango7= new Mango(550,350,20);
mango8= new Mango(700,290,20);
tree1 = new Tree(600,400,10,10);
 
  catapult1 = new Catapult(stone1.body,{x:70,y:480});  
 boy1= new boy(100,550,10,30) 
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  ground1.display();
  tree1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  boy1.display();
  stone1.display();
  catapult1.display();
 
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
  detectCollision(stone1,mango6);
  detectCollision(stone1,mango7);
  detectCollision(stone1,mango8);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	catapult1.fly();

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:70,y:480});
	catapult1.attach(stone1.body,{x:70,y:480});
}
	}
function detectCollision(stone1,mango1){
	mangoBodyPosition=mango1.body.position
	stoneBodyPosition=stone1.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=mango1.r+stone1.r){
		Matter.Body.setStatic(mango1.body,false);

	}
}




