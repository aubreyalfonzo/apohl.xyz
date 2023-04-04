function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

// let img;

// function preload(){
  
//   img = loadImage("https://i.imgur.com/IYeM2Va.png"); 
// }

function setup() {
  
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  background(0);

  // strokeWeight(5);
  // stroke(200);
  
  noStroke();
  
  // fill(random(255), random(255), random(255));
  specularMaterial(255);
  
}

function draw() {
  // background(0);
  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  // ambientLight(255);
  pointLight(0, 0, 255, locX, locY, 100);
  pointLight(100, 0, 255, -locX, -locY*2, 100);
  
  translate(width/2, height/2);
  translate(-width/2, -height/2);
  
  rotateX(radians(frameCount*.1+mouseX/5));
  rotateY(radians(frameCount*.1+mouseY/5));
  
  // sphere(width/3);
  let mx = mouseX;
  let my = mouseY;
  
  // texture(img);
  
  beginShape(TRIANGLE_STRIP);
  vertex(-width/2+mx, height/2-my, -width/4);
  vertex(-width/2-mx, -height/2+my);
  vertex(-width/3+mx, 0-my, mouseX);
  vertex(0-mx, height/3+my, -mouseY);
  vertex(0+mx, -height/3-my, mouseY);
  vertex(width/3-mx, 0+my, -mouseX);
  vertex(width/2+mx, height/2-my);
  vertex(width/2-mx, -height/2+my, width/4);
  endShape(CLOSE);
  
}