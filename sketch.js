
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg;
var gameState = "start" 

function preload()
{
rocketdown = loadImage('rocketdown.png')
rocketleft = loadImage('rocketleft.png')
rocketright = loadImage('rocketright.png')
rocketup = loadImage('rocketupimage.png')
bgimg = loadImage('bgimg.jpeg')
openingpicture = loadImage('opening picture.png') 
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bg = createSprite(700,300)
	bg.addImage(openingpicture)
	bg.scale = 0.2
	bg.visible = false

  player = createSprite(50,500)
  player.addImage("up",rocketup)
  player.addImage("left",rocketleft)
  player.addImage("right",rocketright)
  player.addImage("down",rocketdown)
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);

  drawSprites();

  if(gameState==="start"){
	
    bg.visible = true

	fill ("white")
	stroke ("black")
	strokeWeight(5)
	textSize(20)
	text("PRESS SPACE TO PLAY ",590,440)

	if(keyDown("space")){
    gameState = "play"
	}
  }

  if(gameState==="play"){
   bg.visible = false
   fill("white");
   text(mouseX+','+ mouseY,mouseX,mouseY);

   if(keyCode===25){
    rocket.addImage(rocketdown)
   }

   if(keyCode===26){
    rocket.addImage(rocketright)
   }

   if(keyCode===27){
    rocket.addImage(rocketleft)
   }

   if(keyCode===24){
    rocket.addImage(rocketup)
   }

   wall1 = createSprite(50, 500, 10, 300);
  wall2 = createSprite(150, 550, 10, 200);
  wall3 = createSprite(350, 450, 400, 10);
  wall4 = createSprite(250, 350, 400, 10);
  wall5 = createSprite(455,255, 10, 200);
  wall6 = createSprite(555,305, 10, 295);
  wall7 = createSprite();
  wall8 = createSprite();
  wall9 = createSprite();
  wall10 = createSprite();
  wall11 = createSprite();
  wall12 = createSprite();
  wall13 = createSprite();
  wall14 = createSprite();
  }
  
  
 
}



