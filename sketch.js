var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor ="red"
  speed =random(55,90)
  car.velocityX=speed;
  weight =random(400,1500)
}

function draw() {
  background("black"); 
  if(wall.x-car.x<(wall.width/2 +car.width/2)){
    car.velocityX = 0;
    var deformation =0.5*weight*speed*speed/22500
    if (deformation>180){car.shapeColor ="red"}
    else if(deformation>80 &&deformation<=180){car.shapeColor="yellow"}
    else{car.shapeColor = "green"}
  }
  drawSprites();
}