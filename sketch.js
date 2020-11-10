var division1, division2, bullet1, bullet2, bullet3, speed1, weight1, weight2, weight3, speed2, speed3, damage1, damage2, damage3;
var wall1, wall2, wall3, thickness1, thickness2, thickness3;

function setup() {
  createCanvas(1200,600);
  division1 = createSprite(600, 200, 1200, 20);
  division1.shapeColor = "lightpurple";

  division2 = createSprite(600, 400, 1200, 20);
  division2.shapeColor = "lightpurple";

  wall1 = createSprite(1170, 100, 20, 150);
  wall1.shapeColor = "purple";

  wall2 = createSprite(1170, 300, 20, 150);
  wall2.shapeColor = "purple";

  wall3 = createSprite(1170, 500, 20, 150);
  wall3.shapeColor = "purple";

  bullet1 = createSprite(50, 100, 40, 20);
  bullet1.shapeColor = "blue";

  bullet2 = createSprite(50, 300, 40, 20);
  bullet2.shapeColor = "yellow";

  bullet3 = createSprite(50, 500, 40, 20);
  bullet3.shapeColor = "green"; 

  speed1 = random(10, 35);
  speed2 = random(10, 35);
  speed3 = random(10, 35);

  weight1 = random(80, 100);
  weight2 = random(80, 100);
  weight3 = random(80, 100);

  thickness1 = random(10, 20);
  thickness2 = random(10, 20);
  thickness3 = random(10, 20);

  damage1 = 0.5 * weight1 * speed1 * speed1 / (thickness1 * thickness1 * thickness1);
  damage2 = 0.5 * weight2 * speed2 * speed2 / (thickness2 * thickness2 * thickness2);
  damage3 = 0.5 * weight3 * speed3 * speed3 / (thickness3 * thickness3 * thickness3);
}

function draw() {
  background(170, 30, 240); 
  bullet1.velocityX = speed1; 
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

  textFont("Impact");
  textSize(30);
  fill("yellow");
  text("Bullets and walls", 480, 50);
  fill("lightblue")
  text("Damage: "+ Math.round(damage1), 60, 180);
  text("Damage: "+ Math.round(damage2), 60, 380);
  text("Damage: "+ Math.round(damage3), 60, 580);

  isTouching();
  drawSprites();
}
function isTouching(){
  if (wall1.x - bullet1.x < bullet1.width/2 + wall1.width/2
    && bullet1.x - wall1.x < bullet1.width/2 + wall1.width/2) {
     bullet1.velocityX = 0;
     if(damage1>=10){
       wall1.shapeColor = "red";
     }
     if(damage1<10){
       wall1.shapeColor = "green";
     }
  }

  if (wall2.x - bullet2.x < bullet2.width/2 + wall2.width/2
    && bullet2.x - wall2.x < bullet2.width/2 + wall2.width/2) {
      bullet2.velocityX = 0;   
      if(damage2>=10){
        wall2.shapeColor = "red";
      }
      if(damage2<10){
        wall2.shapeColor = "green";
      }
  }

  if (wall3.x - bullet3.x < bullet3.width/2 + wall3.width/2
    && bullet3.x - wall3.x < bullet3.width/2 + wall3.width/2) {
      bullet3.velocityX = 0;
      if(damage3>=10){
        wall3.shapeColor = "red";
      }
      if(damage3<10){
        wall3.shapeColor = "green";
      }
  } 
}