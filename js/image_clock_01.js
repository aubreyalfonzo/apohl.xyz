function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img;

let img1;

function preload(){
  img = loadImage('https://i.imgur.com/Fzj9rHC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  
  img.resize(width, 0);
  
  img1 = createImage(img.width, img.height);
  
  img.loadPixels();
  img1.loadPixels();
  
  textSize(width/9.5);
  fill(255);
  noStroke();
  // stroke(0);
  textAlign(CENTER, CENTER);
  
  imageMode(CENTER);

}

function draw() {
  let s = second();
  let m = minute();
  let h = hour();

  // let col = 200 + h, 200 + m, 200 + s;
  
  background(200 + h, 200 + m, 200 + s);

  fill(200 + h, 200 + m, 200 + s);


  for(let y = 0; y < img.height; y++) {
    for(let x = 0; x < img.width; x++) {
      for(let i = 0; i < img.width / img.height; i++) {
      let index = (x + y * img.width) * s;
      img1.pixels[index + m] = img.pixels[index + s];
      img1.pixels[index + h] = img.pixels[index + m];
      img1.pixels[index + s] = img.pixels[index + h];
      img1.pixels[index + 3] = img.pixels[index + 3];
      }
    }
  }
  
  img.updatePixels();
  img1.updatePixels();
  
  image(img1, width/2, height/2);
  
  text(h + ':' + m + ':' + s, width/2, height/2);
  
  if(height > width){
    textSize(height/9.5);
  }

  rect(0, 0, width, 50);
  rect(0, height-50, width, 50);
  rect(0, 0, 50, height);
  rect(width-50, 0, 50, height);
  
}

