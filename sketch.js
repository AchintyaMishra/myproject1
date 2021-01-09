var fr,mr;
var b;



function setup() {
  createCanvas(800,400);
 fr= createSprite(200, 200, 50, 50);
 fr.shapeColor="blue"
 fr.velocityX=5

 mr=createSprite(300,300,70,70);
 mr.shapeColor="blue"

 b=createSprite(400,200,50,50)
 b.shapeColor="red"
}

function draw() {
  background(255,255,255);  

  mr.x=mouseX;
  mr.y=mouseY;

  if(fr.x-mr.x<=fr.width/2+mr.width/2 && mr.x-fr.x<=mr.width/2+fr.width/2 && fr.y-mr.y<=fr.height/2+mr.height/2  && mr.y-fr.y<=mr.height/2+fr.height/2  ) 
  {
    fr.shapeColor="green"
    mr.shapeColor="green"
  }
  else
  {
    fr.shapeColor="blue"   
    mr.shapeColor="blue"
  }

 if(fr.x-b.x<=fr.width/2+b.width/2 && b.x-fr.x<=b.width/2+fr.width/2)
{
  fr.velocityX=-5
}




  drawSprites();
}