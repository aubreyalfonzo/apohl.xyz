let xoff = 0.0;
let yoff = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(150, 150, 255);
  noStroke();
  textSize(width/15);
  textAlign(CENTER, CENTER);

  frameRate(15);
  
}

function draw() {
  background(0, 90);
  
  xoff = xoff + 0.01;
  yoff = yoff + 0.01;
  let n = width*xoff;
  let n2 = height*yoff;
  
  text("CLASS IS IN SESSION", width/2, height/2);
  
  let x2 = floor(random(width));
  let y2 = floor(random(height));
  let w = floor(random(width));
  let h = floor(random(height));
  
  copy(x2, y2, w, h, w, h, w, h);

}