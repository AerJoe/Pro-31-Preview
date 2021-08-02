const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pipe_base
var pipe_blower
var blow_button
var ball

/*var options={
  isStatic:true
}

var ball_options={
  isStatic:false
}*/
function setup() {
  createCanvas(800,400);
  
  
  engine = Engine.create();
  world = engine.world;
  
  
  frameRate(80);
  //createSprite(400, 200, 50, 50);

  
  /*pipe_base = Bodies.rectangle(400, 100, 230, 20, pipeBase_options)
  World.add(world, pipe_base)*/
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(20,50,50);  
 
  rect(200,300,300,20/*,options*/)
  rect(300,265,100,50/*,options*/)
  
 
  //Engine.update(engine);


}

function blow() {

}