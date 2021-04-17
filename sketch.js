const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;

function setup() {
  createCanvas(800,800);

  engine=Engine.create();
  world=engine.world;

  roof=new Roof(330,80);

  bob1=new Bob(250);
  bob2=new Bob(290);
  bob3=new Bob(330);
  bob4=new Bob(370);
  bob5=new Bob(410);

  rope1=new Rope(bob1.body,roof.body,-80,0);
  rope2=new Rope(bob2.body,roof.body,-80+40,0);
  rope3=new Rope(bob3.body,roof.body,-80+80,0);
  rope4=new Rope(bob4.body,roof.body,-80+120,0);
  rope5=new Rope(bob5.body,roof.body,-80+160,0);

  Engine.run(engine); 
 
}

function draw() {
  

  background(255); 

  Engine.update(engine);
  show();
  
  
}
function show(){


  


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  

  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();



  
 
  

}

function keyPressed(){
  if (keyCode===32){
    
      Matter.Body.applyForce(bob1.body,{x:bob1.body.position.x,y:bob1.body.position.y},{x:-100,y:-100})

  }
}