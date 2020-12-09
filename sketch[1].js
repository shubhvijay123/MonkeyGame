
var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
}


function draw() {
background("white")
  stroke("white");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime ,100 ,50)
  
  
  if(ground.x < 0){
    ground.x=ground.width/2;
  }
 
if(keyDown("space")&& monkey.y >= 200) {
        monkey.velocityY = -12;
  
    }
  food();
  
    //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  console.log(monkey.y) 
  obstacles();
 monkey.collide(ground) 
  drawSprites();
}
function food() {
  if(frameCount % 80 === 0 ){
    var banana = createSprite(400,200)
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage)   
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=150;
   // FoodGroup.add(banana)
  }
}
function obstacles(){
  if(frameCount % 300 === 0 ){
    var obstacle = createSprite(400,315,50,50)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX=-2;
    obstacle.lifetime=250;
    obstacle.scale=0.2
   // obstaclesGroup.add(obstacle)
  }
}