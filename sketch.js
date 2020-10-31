var bullet;
var wall;
var speed;
var weight;
var hasCollided;



function setup() {


  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(150,200,50,10);
  bullet.velocityX=speed;
  bullet.shapeColor="gold";
  
  wall=createSprite(600,200,thickness,height/2);
  wall.shapeColor="black";
}



function draw() {
  background("blue"); 


  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness * thickness *thickness);

    if(damage>10){
      wall.shapeColor="red";
    } 

    if(damage<10){
      wall.shapeColor="green";

    }


  }

  
hasCollided(bullet,wall);


  
  drawSprites();

  textSize(25);
  fill("black");
  text("BULLETS AND WALLS",300,50);


  
}


function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  }