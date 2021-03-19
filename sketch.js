var cat, mouse, background1;
var cat1, cat2, cat3, cat4, mouse1, mouse2, mouse3, mouse4, garden;

function preload() {
   //loading the images 
 cat1=loadAnimation("images/cat1.png");
 cat2=loadAnimation("images/cat2.png","images/cat3.png")
 cat3=loadAnimation("images/cat4.png")
 mouse1=loadAnimation("images/mouse1.png");
 mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
 mouse3=loadAnimation("images/mouse4.png");
 background1=loadImage("images/garden.png");
}

function setup(){
  createCanvas(1000,800);
//creating the cat
cat=createSprite(870,600); 
cat.addAnimation("catsleeping",cat1);
cat.scale=0.2;
//creating the mouse
mouse=createSprite(200,600,50,50);
mouse.addAnimation("mousestanding",mouse1);
mouse.scale=0.15;
//creating the background
//background1.addImage(garden);   
}  


function draw() {
background(background1);

//collision detection    
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
 cat.addAnimation("catLastImage",cat3);
 cat.velocityX=0;
 cat.x=300; 
 cat.changeAnimation("catLastImage");
 cat.scale=0.2;
 mouse.addAnimation("mouseLastImage",mouse3)
 mouse.changeAnimation("mouseLastImage"); 
 mouse.scale=0.15;
}
    drawSprites();
}


function keyPressed(){
if(keyDown("Left_Arrow")){
cat.velocityX=-5;
cat.addAnimation("catRunning",cat2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseTeasing",mouse2);
mouse.frameDelay=25;
mouse.addAnimation("mouseTeasing");
}

}
