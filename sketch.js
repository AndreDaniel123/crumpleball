const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var ball

function preload() {

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		restitution :0.5,
		isStatic : false,
		friction :0,
		densuty : 1.2


	}

	
	//Create the Bodies Here.
	
	ball = Bodies.circle(100, 100, 20, ball_options)
	World.add(world, ball)
	ground = new Ground(400, 600, 800, 15)
	line1 = new Ground(560, 552, 20, 80)
	line2 = new Ground(680, 552, 20, 80)



	Engine.run(engine);

}
//C:\Users\adtit\Downloads\MatterJSBoilerPlate-main (3)\MatterJSBoilerPlate-main\ground.js

function draw() {
	background(0);
	rectMode(CENTER);

	
	
	ground.display()
	line1.display()
	line2.display()
	ellipseMode(RADIUS)
	ellipse(ball.position.x,ball.position.y,20)

	
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
	}
}