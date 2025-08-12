function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img, imgg;

let img1, img2;

function preload(){
  img = loadImage('https://i.imgur.com/vBxZSct.png');
  imgg = loadImage('https://i.imgur.com/Fzj9rHC.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  img.resize(width/2-50, height-100);
  imgg.resize(width/2-50, height-100);
  
  img1 = createImage(img.width, img.height);
  img2 = createImage(imgg.width, imgg.height);
  
  img.loadPixels();
  imgg.loadPixels();
  img1.loadPixels();
  img2.loadPixels();
  
  textSize(width/9.5);
  fill(255);
  // stroke(0);
  textAlign(CENTER, CENTER);
  
}

function draw() {
  background(255);
  
  let s = second();
  let m = minute();
  let h = hour();

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
  
  for(let y = 0; y < imgg.height; y++) {
    for(let x = 0; x < imgg.width; x++) {
      for(let i = 0; i < imgg.width / imgg.height; i++) {
      let index = (x + y * imgg.width) * s;
      img2.pixels[index + h] = imgg.pixels[index + m];
      img2.pixels[index + s] = imgg.pixels[index + h];
      img2.pixels[index + m] = imgg.pixels[index + s];
      img2.pixels[index + 3] = imgg.pixels[index + 3];
      }
    }
  }
  
  img.updatePixels();
  imgg.updatePixels();
  img1.updatePixels();
  img2.updatePixels();
  
  image(img1, 50, 50);
  
  image(img2, width/2, 50);
  
  text(h + ':' + m + ':' + s, width/2, height/2);
  
  if(height > width){
    textSize(height/9.5);
  }
  
}