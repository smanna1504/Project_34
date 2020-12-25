
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
// var angry,bg1,bg2,joy,love,pleading,smile;
// //var r=Math.round(random(0,2));
// var s;
// var mConstraint;

function preload()
{
  // angry=loadImage("images/angry.jpg");
  bg1=loadImage("images/bg1.jpg");
  // bg2=loadImage("images/bg2.jpg");
  // joy=loadImage("images/joy.jpg");
  // love=loadImage("images/love.png");
  // pleading=loadImage("images/pleading.jpg");
  // smile=loadImage("images/smile.jpg");
  // s=loadImage("images/s.png");
}

function setup() {
var canvas=	createCanvas(800, 600);


	engine = Engine.create();
  world = engine.world;
  
// let canvasmouse=Mouse.create(canvas.elt);
// canvasmouse.pixelRatio=pixelDensity();

// let options={
//   mouse:canvasmouse
// };

// mConstraint=MouseConstraint.create(engine,options);
// World.add(world,mConstraint);

	//Create the Bodies Here.
roof=new Roof();
bobObject1=new Bob(300);
bobObject2=new Bob(350);
bobObject3=new Bob(400);
bobObject4=new Bob(450);
bobObject5=new Bob(500);

var bobDiameter=5;
rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*10*2, 0);
 rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*5*2, 0);
  rope3=new Rope(bobObject3.body,roof.body,0, 0);
   rope4=new Rope(bobObject4.body,roof.body,bobDiameter*5*2, 0) ;
   rope5=new Rope(bobObject5.body,roof.body,bobDiameter*10*2, 0);

	Engine.run(engine);
  
}


function draw() {
 // console.log(r);
  rectMode(CENTER);
  background(bg1);
  fill(0);
  stroke(0);
  textSize(20);
  text("DRAG THE MOUSE TO START",250,50);
  //console.log(windowWidth);
 // console.log(windowHeight);

  drawSprites();
roof.display();
bobObject1.display();
bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display(); 
 rope3.display(); 
 rope4.display(); 
 rope5.display();

  //  if(bobObject1.x>320){
  //   fill('green');
  //   
  // }
  // else{
  //   bobObject2.display();
  // }
  
}

function mouseDragged(){
        Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});

}

