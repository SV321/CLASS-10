var trex, trex_running, edges;
var groundImage,ground;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
edges=createEdgeSprites()
trex.scale=0.5

//create ground
ground=createSprite(200,180,600,20)
ground.addImage("ground",groundImage)
}


function draw(){
  //set background color 
  background("lightblue");
  if(keyDown("space")&&trex.y>=151) {
trex.velocityY=-7
  }
  trex.velocityY=trex.velocityY+0.5
trex.collide(ground)
console.log(trex.y)

ground.velocityX=-5
if(ground.x<0){
  ground.x=ground.width/2
}
  drawSprites();
}