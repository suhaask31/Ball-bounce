const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;
var button1,button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_option = {
    restitution : 0.95,
    frictionAir : 0.01
    
    
  }
  ball = Bodies.circle(200,200,20,ball_option)
  World.add(world,ball)
  button1 = createImg("right.png")
  button1.position(300,50)
  button1.size(50,50)
  button1.mouseClicked(Hforce)
  button2 = createImg("up.png")
  button2.position(100,50)
  button2.size(50,50)
  button2.mouseClicked(Vforce)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  fill("red")
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
  
}

function Hforce(){
  Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.05,y:0})

}
function Vforce(){
  Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.0,y:-0.05})
}