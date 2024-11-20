let x;           
let y = 0;       
let speed = 0;   
let acceleration = 0.2;  
let deceleration = 0.1;  
let moving = true; 
let s = 0.6;
// wOrL = "Win or Lose"//      
let wOrL = ""; 
let state = "game";
let  idunno = true;

function setup() {
  createCanvas(800, 600); 
  x = 400; 
}

function startScreen() { 
background(0,0,0);
fill (255,255,255);
textSize(150);
textAlign (CENTER,CENTER);
text("Start", 400,300);
}

function gameScreen (){
 
  background(100,150,200); 

  if (moving) {
    
    if (!keyIsPressed || keyCode !== 32) {
      speed += acceleration; 
    }

   
    if (keyIsPressed && keyCode === 32) {
      speed -= deceleration; 
    }

    
    if (speed < 0) {
      speed = 0;
    }

    
    y += speed;

  
    if (y >= 500) {
      y = 500;  
      moving = false; 

      
      if (speed < 5 || speed > 8) {
        idunno = true;
      } else if (speed >= 5 && speed <= 8) {
        idunno = false;
      }
    }
  }

  
  chicken(x, y, s);
  push();
  fill(200,150,20);
 rect (325,530,150,70);
 fill (250,50,50);
 rect (350,530,20,70);
 rect (430,530,20,70);
  pop();
}

function resultScreen(){
  

  if (idunno === true) {
    background (200,100,100);
    wOrL = "Defeat";
    
  }else if (idunno === false) {
    background (100,200,100);
    wOrL = "Victory";
  }

  textSize(70);
  fill(255, 255, 255);
  //textAlign(CENTER, CENTER); from p5.js offical website. //
  textAlign(CENTER, CENTER);
  text(wOrL, 400, 300);
}

function draw() {
if (state === "start") {
  startScreen();
} else if (state === "game") {
  gameScreen();
} else if (state === "result"){
  resultScreen();
}
}

// Line from Garrit Schnap//
function mouseClicked(){
  if (state === "start") {
    state = "game";
   } else if (state === "game"){
      state = "result";
    } else if (state === "result") {
      state = "game"; 
      y = 0;
      speed = 0;
      moving = true;
      wOrL = "";
      idunno = true;

     }
}
function chicken(x, y, s) {
  // Body
  push();
  strokeWeight(3);
  ellipse(x, y, 100 * s, 100 * s);
  pop();

  // Eyes and pupils
  ellipse(x - 18 * s, y - 10 * s, 40 * s, 40 * s);
  ellipse(x + 18 * s, y - 10 * s, 40 * s, 40 * s);
  fill(0, 0, 0);
  ellipse(x - 18 * s, y - 8 * s, 20 * s, 20 * s);
  ellipse(x + 18 * s, y - 8 * s, 20 * s, 20 * s);

  // Beak
  fill(245, 107, 32);
  strokeWeight(3);
  triangle(x, y + 60 * s, x - 17 * s, y + 15 * s, x + 17 * s, y + 15 * s);

  // Mohawk
  fill(255, 0, 0);
  ellipse(x + 10 * s, y - 60 * s, 20 * s, 40 * s);
  ellipse(x, y - 44 * s, 20 * s, 40 * s);
  fill(255, 255, 255);

  // Wings
  ellipse(x - 65 * s, y, 40 * s, 30 * s);
  ellipse(x + 65 * s, y, 40 * s, 30 * s);
}