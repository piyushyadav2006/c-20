var tri ,tri2;
function setup() {
  
  createCanvas(800,400);
  tri=createSprite(400, 200, 50, 50);
  tri2=createSprite(400,100,50,50);
  tri.shapeColor="GREEN";
  tri2.shapeColor="green";
}

function draw() {

  background(255,255,255);  
  console.log(tri.x-tri2.x);
  tri.x=mouseX;
  tri.y=mouseY
  if(tri.x-tri2.x<tri.width/2+tri2.width/2&& tri2.x-tri.x<tri.width/2+tri2.width/2 &&
    tri.y-tri2.y<tri.height/2+tri2.height/2 
    &&tri2.y-tri.y <tri2.height/2 +tri.height/2){
    tri.shapeColor="red";
    tri2.shapeColor="red";
    
  }
  else{
    tri.shapeColor="green";
    tri2.shapeColor="green";
  }
  drawSprites();
}