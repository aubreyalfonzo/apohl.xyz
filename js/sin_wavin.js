function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let data;
let datamod;

let fc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  // rectMode(CENTER);

  // fill(25);
  noStroke();
  // stroke(255);

  data = 50;
  datamod = width/100;

  fc = 1;
}

function draw() {
  background(200);

  fc = fc + 1;

  // println(fc);

  // if(fc > 1000) {
  //  fc = 0;
  // }
  push();
  fill(25);
  for(let i = 0; i < data+1; i++) {

    let m = map(i, 0, data, 0, width);
    let m2 = map(i, 0, data, width, 0);

    let manip = sin(fc*(.0005)*i)*500;
    // let manip = 100;

    rect(m + datamod, height / 2, width / 100, manip);
    rect(m2 - datamod, height / 2, width / 100, -manip);
  }
  pop();
  
  push();
  blendMode(DIFFERENCE);
  fill(200);
  for(let i = 0; i < data*2; i++) {

    let m = map(i, 0, data, 0, width/2);
    let m2 = map(i, 0, data, width, width/2);

    let manip = sin(fc*(.0001)*i)*500;
    // let manip = 100;

    rect(m + datamod, height / 2, width / 100, manip);
    rect(m2 - datamod, height / 2, width / 100, -manip);
  }
  pop();
  
  if(fc > 2025){
    fc = -fc;
  }else{
    fc = fc;
  }

}