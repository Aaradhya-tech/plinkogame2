var crop, crop1, crop2, crop3, crop4;
var particle;
var dock1, dock2, dock3, dock4, dock5, dock6, dock7;
var score = 0;


function setup() {
  createCanvas(800,800);

  particle = createSprite(400,50,20,20);
  dock1 = createSprite(190,750,5,300);
  dock2 = createSprite(270+150,750,5,300);
  dock3 = createSprite(270+270+100,750,5,300);
  dock4 = createSprite(190/2,600,190,0.5);
  dock4.shapeColor = 0;
  dock5 = createSprite(310,600,230,0.5);
  dock5.shapeColor = 0;
  dock6 = createSprite(533,600,223,0.5)
  dock6.shapeColor = 0;
  dock7 = createSprite(719,600,150,0.5)
  dock7.shapeColor = 0;


}
function draw() {
  createCanvas(800,800)
  background(0)

  textSize(50);
  fill("white");
  text("50", 80,700);
  text("100", 270,700);
  text("150", 480, 700);
  text("200", 670, 700);

  textSize(24);
  fill("white");
  text("Score = "+ score, 10,50);
  text("Set the particle by left and right arrows",200,550);
  text("Now to start the game press down arrow",200,580);

  
  for (var i = 50; i < 800; i=i+50) {
    crop = createSprite(i,100,20,20);
    crop.shapeColor = 'green';
    if(particle.collide(crop)){
      particle.velocityX = -3
      particle.velocityY = 5
   }
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop1 = createSprite(i,200,20,20);
    crop1.shapeColor = 'red';
    if(particle.collide(crop1)){
      particle.velocityX = 2
      particle.velocityY = 4
   }
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop2 = createSprite(i,300,20,20);
    crop2.shapeColor = 'purple';
    if(particle.collide(crop2)){
       particle.velocityX = -4
       particle.velocityY = 5
    }
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop3 = createSprite(i,400,20,20);
    crop3.shapeColor = 'white';
    if(particle.collide(crop3)){
      particle.velocityX = 5
      particle.velocityY = 5
   }
  }
  
  for (var i = 50; i < 800; i=i+50) {
    crop4 = createSprite(i,500,20,20);
    crop4.shapeColor = 'orange';
    if(particle.collide(crop4)){
      particle.velocityX = -2
      particle.velocityY = 5
   }
  }

  if(keyDown("down")){
    particle.velocityY = 5;
   } 

  if(keyDown(RIGHT_ARROW)){
  particle.x = particle.x+6
  }

  if(keyDown(LEFT_ARROW)){
  particle.x = particle.x-6
  }

  if(particle.x == 520){
    particle.velocityY = 5;
  }

  if(particle.isTouching(dock4)){
    score = score+10
    // 50
  }

  if(particle.isTouching(dock5)){
    score = score+20
    // 100
  }

  if(particle.isTouching(dock6)){
    score = score+30
    // 150
  }

  if(particle.isTouching(dock7)){
    score = score+40
    // 200
  }

  
  drawSprites();
}
  
