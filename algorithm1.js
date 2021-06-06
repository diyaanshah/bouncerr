var m,f;
function setup() {
  createCanvas(800,400);
 m= createSprite(400, 200, 50, 50);
 f= createSprite(400, 300, 50, 50);
}

function draw() {
  background(255,255,255);
  m.x=mouseX
m.y=mouseY

if(m.x-f.x<m.width/2+f.width/2||m.x+f.x>m.width/2-f.width/2){
background('blue')


}
else{
  background('pink')
 
}

  drawSprites();
}