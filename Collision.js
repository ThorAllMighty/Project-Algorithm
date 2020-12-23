var fixed,moving;




function setup() {
  createCanvas(1500,1500);
  fixed=createSprite(200, 200, 50, 80);
  moving=createSprite(400,200,80,50);
  fixed.shapeColor="green";
    moving.shapeColor="green";
}

function draw() {
  background(0);  
  moving.x=mouseX;
  moving.y=mouseY;

  if(moving.x-fixed.x<=fixed.width/2+moving.width/2&& 
    fixed.x-moving.x<=fixed.width/2+moving.width/2&&
    moving.y-fixed.y<=fixed.height/2+moving.height/2&& 
    fixed.y-moving.y<=fixed.height/2+moving.height/2){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }
  else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  
  drawSprites();
}