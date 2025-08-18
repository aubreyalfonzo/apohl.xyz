function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img;

let img1;

let s;
let m;
let h;
let da;
let mo;
let yr;

let sec;
let min;
let hou;

function preload() {
  img = loadImage('https://i.imgur.com/Fzj9rHC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  img.resize(width, 0);

  img1 = createImage(img.width, img.height);

  img.loadPixels();
  img1.loadPixels();

  textSize(width / 9.5);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);

  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {
  // s = 0;
  // m = 0;
  // h = 0;
  // da = 1;
  // mo = 1;
  // yr = 2025;

  s = second();
  m = minute();
  h = hour();
  da = day();
  mo = month();
  yr = year();
  

  img1.resize(img.width + s - 1, img.height + s - 1);
  
  if (height > width){
    img.resize(0, height*2);
  }

  sec = nf(s, 2);
  min = nf(m, 2);
  hou = nf(h, 2);

  background(200 + h, 200 + m, 200 + s);

  fill(200 + h, 200 + m, 200 + s);


  for(let y = 0; y < img.height + m; y++) {
    for(let x = 0; x < img.width + m; x++) {
      for(let i = 0; i < img.width / img.height; i++) {
        let index = (x + y * img.width) * 4 + m;
        img1.pixels[index + da] = img.pixels[index + s];
        img1.pixels[index + mo] = img.pixels[index + m];
        img1.pixels[index + s + m + h] = img.pixels[index + h];
        img1.pixels[index + 3] = img.pixels[index + 3];
      }
    }
  }

  img.updatePixels();
  img1.updatePixels();

  noSmooth();

  image(img1, width / 2, height / 2);

  push();
  fill(255);
  blendMode(DIFFERENCE);

  let shapesize;

  if(height < width) {
    shapesize = height - 100;
  } else {
    shapesize = width - 100;
  }
  ellipse(width / 2, height / 2, shapesize);
  text(hou + ':' + min + ':' + sec, width / 2, height / 2);
  pop();

  // text(hou + ':' + min + ':' + sec, width/2, height/2);

  if(height > width) {
    textSize(height / 9.5);
  }

  push();
  translate(width / 2, height / 2);
  for(i = 0; i < 60; i++) {
    let ma = map(59, 0, 60, 0, 360);
    rotate(radians(ma));
    rect(cos(i), -width / 4.5, 5, 5);
  }
  pop();

  push();
  fill(255);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  rotate(radians(map(s, 0, 60, 0, 360)));
  line(0, 0, 0, -width / 4);
  pop();

  push();
  fill(255);
  translate(width / 2, height / 2);
  rotate(radians(map(m, 0, 60, 0, 360)));
  rect(0, -width / 4 + 25, 10, 100);
  pop();

  push();
  fill(255);
  translate(width / 2, height / 2);
  rotate(radians(map(h, 0, 12, 0, 360)));
  rect(0, -width / 4 + 25, 10, 50);
  pop();

  push();
  rectMode(CORNER);
  let rs = 50;
  rect(0, 0, width, 50);
  rect(0, height - 50, width, 50);
  rect(0, 0, rs, height);
  rect(width - 50, 0, rs, height);
  pop();
  
}

function keyPressed() {

  // s = second();
  // m = minute();
  // h = hour();

  // sec = nf(s, 2);
  // min = nf(m, 2);
  // hou = nf(h, 2);

  if(key === ' ') {
    save('TIME_MACHINE_TEST_03_' + hou + '_' + min + '_' + sec + '_' + da + '_' + mo + '_' + yr);
    img1.save('TIME_MACHINE_TEST_03_IMG_ONLY_' + hou + '_' + min + '_' + sec + '_' + da + '_' + mo + '_' + yr);
  }
}