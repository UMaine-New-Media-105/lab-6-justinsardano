let spriteX
let spriteY
let bugX
let bugY
let frogColor
function setup() {
  createCanvas(400, 400);
  spriteX=50
spriteY=50
  bugX=random(1,400)
  bugY=random(1,400)
  frogColor=random(255)
}

function draw() {
  background(220);
  
  addBug(bugX,bugY,1)
  addSprite(spriteX,spriteY,1)
 
}
if (x1<x1+x2 && y1<y1+y2){
  fill("frogColor")
  addSprite()
}

function addSprite(x1,y1,size){
  push()
  translate(x1,y1)
  scale(size)
  fill("lightgreen")
  ellipse(0,0,50)
  fill ("white")
ellipse (0,7,35) 
  fill("lightgreen")
 ellipse (-15,-25,15) 
  fill("white")
   ellipse (-15,-25,12) 
fill("black")
  ellipse (-15,-25,5)
    fill("lightgreen")
 ellipse (15,-25,15) 
  fill("white")
   ellipse (15,-25,12) 
fill("black")
  ellipse (15,-25,5)
  pop()
}
function addBug(x2,y2,size){
  translate (x2,y2)
  scale(size)
  fill ("black")
  rect(0,2,1,10)
    rect(7,2,1,10)
    rect(14,2,1,10)


  ellipse (0,0,10)
  ellipse(10,0,8)
 ellipse(18,0,6)
  
  
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    spriteY-=5;
  }
  if (keyCode==DOWN_ARROW){
    
    spriteY+=5;
  }
  if (keyCode==LEFT_ARROW){
    spriteX-=5;
  
  }
  if (keyCode==RIGHT_ARROW){
    spriteX+=5;
  }
  
}
