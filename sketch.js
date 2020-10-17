var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particles2;
var turn =0;
var gameState= "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
  mousePressed();
  point();
   
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  text("turn : "+turn,500,30);
  if(particles!==null) {
    particles.display();
  }
  
  text("500 ",500,700);
  text("500 ",420,700);
  text("200 ",350,700);
  text("200 ",260,700);
  text("500 ",500,700);
  text("500 ",420,700);
  text("500 ",580,700);
  text("500 ",660,700);
  text("500 ",740,700);
  text("200 ",180,700);
  text("200 ",100,700);
  text("200 ",20,700);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 if(particles!==null) {
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
 }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   point1();
   point2();
   over(); 
}

function mousePressed(){
if(gameState !== "end"){
turn++;

particles= new Particle(mouseX,10,10,10);

}
}

function point1(){   
  if(particles !== null){
   particles.display();
   console.log(particles);
   if(particles.body.position.y>770){
 
     if(particles.body.position.x<400){
    score=score+200;
    particles=null;
    if(turn>=5) gameState= "end"
    mousePressed();

     }
   }
  }
}

function point2(){

  if(particles !== null){
   particles.display();
   if(particles.body.position.y>770){
 
     if(particles.body.position.x>400){
    score=score+500;
    particles=null;
    if(turn>=5) gameState= "end";
    mousePressed();
     }
   }
  }
}
function over(){

if (turn >= 5){
   text("Game Over",100,100);
   textSize(100);
   //particles(inStatic=false);

}

}