var ghost, ghostimg,ghoststand;
var climber, climberimg;
var tower, towerimg;
var door, doorimg;
var spooky;
var inv;
var climbergroup;
var doorgroup;
var invgroup;
var edges;

function preload() {
  
  towerimg=loadImage('tower.png');
  climberimg=loadImage('climber.png');
  ghostimg=loadImage('ghost-jumping.png');
  ghoststand=loadImage('ghost-standing.png');
  doorimg=loadImage('door.png');
  spooky=loadSound('spooky.wav');
  
}

function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  tower=createSprite(300,300,500,600);
  tower.addImage(towerimg);
  tower.velocityY=4;
  tower.scale=1.1;
  
  ghost=createSprite(200,200,20,20);
  ghost.addImage(ghostimg);
  ghost.scale=0.31;
  

  doorgroup=new Group();
  climbergroup=new Group();
  invgroup=new Group();
  
}

function draw() {
  background(0);
  
  if(keyDown('LEFT_ARROW')){
    ghost.velocityX=-7;
  }
  
  if(keyWentUp('LEFT_ARROW')){
    ghost.velocityX=0;
  }
  
  if(keyDown('RIGHT_ARROW')){
    ghost.velocityX=7;
  }
  
    if(keyWentUp('RIGHT_ARROW')){
    ghost.velocityX=0;
  }

  
  if(keyDown('space')){
    ghost.velocityY=-10;
  }
  ghost.velocityY=ghost.velocityY + 0.8;
   
  if(tower.y > 600){
    tower.y = height/2;
  }
  if (ghost.isTouching(invgroup)){
    ghost.destroy();
  }
  ghost.collide(edges);
  ghost.collide(climbergroup);
  
  doorgen();
  
 drawSprites();  
}


function doorgen(){
  if (frameCount%80===0){
  door=createSprite(200,0);
    door.addImage(doorimg);
    ghost.depth=door.depth;
    door.depth=door.depth-1;
  climber=createSprite(200,70);
    climber.addImage(climberimg);
  inv=createSprite(100,84,70,20);
    inv.visible=false;
  door.x=Math.round(random(100,500));
  climber.x=door.x;
  inv.x=door.x;
  door.velocityY=4;
  climber.velocityY=4;
  inv.velocityY=4;
  doorgroup.add(door);
  climbergroup.add(climber);
  invgroup.add(inv);
  }
}
