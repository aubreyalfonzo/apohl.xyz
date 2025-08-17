let img;

let img1;

function preload() {
  img = loadImage('https://i.imgur.com/Fzj9rHC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  let s = second();
  let m = minute();
  let h = hour();
  let da = day();
  let mo = month();
  let yr = year();

  img.resize(width, 0);

  img1 = createImage(img.width + mo - 1, img.height);

  img.loadPixels();
  img1.loadPixels();

  textSize(width / 9.5);
  fill(255);
  noStroke();
  // stroke(0);
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

  let sec = nf(s, 2);
  let min = nf(m, 2);
  let hou = nf(h, 2);

  fill(200 + h, 200 + m, 200 + s);

  background(200 + h, 200 + m, 200 + s);


  for(let y = 0; y < img.height + h; y++) {
    for(let x = 0; x < img.width + h; x++) {
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
  fill(255);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  rotate(radians(map(s, 0, 60, 0, 360)));
  line(0, 0, 0, -width / 4, 25);
  pop();
  push();
  fill(255);
  translate(width / 2, height / 2);
  rotate(radians(map(m, 0, 60, 0, 360)));
  rect(0, -width / 4 + 25, 25);
  pop();
  push();
  fill(255);
  translate(width / 2, height / 2);
  rotate(radians(map(h, 0, 12, 0, 360)));
  ellipse(0, -width / 4 + 50, 25);
  pop();

  push();
  rectMode(CORNER);
  rect(0, 0, width, 50);
  rect(0, height - 50, width, 50);
  rect(0, 0, 50, height);
  rect(width - 50, 0, 50, height);
  pop();
}

function keyPressed() {

  let s = second();
  let m = minute();
  let h = hour();

  let sec = nf(s, 2);
  let min = nf(m, 2);
  let hou = nf(h, 2);

  if(key === ' ') {
    save('TIME_MACHINE_TEST_01_' + hou + '_' + min + '_' + sec);
    img1.save('TIME_MACHINE_TEST_01_IMG');
  }
}