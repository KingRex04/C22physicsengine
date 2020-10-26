 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine,world;
 var obj;
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  var obj_options ={
    isStatic:true 
  } 

  obj = Bodies.rectangle(200,100,50,50,obj_options);
  World.add(world,obj);
  console.log(obj.position.x);
  console.log(obj.position.y);
}

function draw() {
  background("green");  
 
  Engine.update(engine);
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,50,50);
  drawSprites();
}