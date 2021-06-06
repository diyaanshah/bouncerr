const e=Matter.Engine;
const w=Matter.World;
const  b=Matter.Bodies;

var en,wo,bo;
var gr;
function setup(){
  createCanvas(400,400);

en=e.create()
wo=en.world

bo=b.circle(200,50,10,{restitution:1});
w.add(wo,bo)

gr=b.rectangle(200,350,400,100,{isStatic:true})
w.add(wo,gr)
}

function draw(){
background('orange')

e.update(en)
ellipseMode(RADIUS)
ellipse(bo.position.x,bo.position.y,10,10)

rectMode(CENTER)
rect(gr.position.x,gr.position.y,400,100)


}