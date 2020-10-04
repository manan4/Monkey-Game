
var monkey , monkey_running,end;
var ground  ;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup, gameState = end;
var score = 0;


function preload(){
   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");  
  
}



function setup() {
  createCanvas(400,400);
  
  ground = createSprite(0,356,400,5) 
  
  ground.velocityX = -4;  
  console.log(ground.x)
  
  monkey = createSprite(70,330,0,0)  
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.09;
  
}



function draw() {
  background("white");
  
  
  var survivalTime=0;
 stroke("blue");
  textSize(18);
  fill("blue");
  text("score:"+ score,180,50);
  
  stroke("black");
  textSize(18);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:"+ survivalTime,140,25);
  
  fruitGroup = createGroup();
  //obstacleGroup = createGroup();
  
  if (keyDown("space")&&monkey.y >=100){
    monkey.velocityY = -10;
  }
  
    monkey.velocityY = monkey.velocityY+0.5;
    monkey.collide(ground)
  
  if(ground.x< 200)  {
     ground.x = ground.width/2;
     }
  

    obstacleGroup();
    foodGroup();
    drawSprites();  
}


function obstacleGroup(){
if(frameCount%300===0){
  obstacle = createSprite(400,340,10,40);
  obstacle.addImage(obstacleImage);  
  obstacle.velocityX = -3;
  obstacle.scale = 0.09;
  obstacle.lifeTime = 150;
}
}


function foodGroup(){
if(frameCount%80===0){
  banana = createSprite(400,250,10,40);  
  banana.addImage(bananaImage);  
  banana.velocityX = -4;
  banana.scale = 0.08;
  banana.y = Math.round(random(180,280))
  banana.lifeTime = 150;
}
}



