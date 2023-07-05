function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let ns=0.02;

function setup(){
	createCanvas(windowWidth, windowHeight);
	strokeWeight(5);
	
	textAlign(CENTER, CENTER);
}

function draw() {
  background(200);
  
  let y = height/2;
  
  let manip = sin(frameCount*.01);
  
  if(mouseY > 0){
  	y = mouseY;
  }
  
  for (let x=0; x < width; x+=10) {
    let nv = noise((mouseX+x*manip/2)*ns, y*ns*manip/2);
    stroke(nv*200);
    line(x, y+nv*1000*manip, x, y-nv*1000*manip);
  }
  
  push();
  noStroke();
  fill(200);
  textSize(width/7);
  text('****HELLO****', width/2, height/5);
  text('****WORLD****', width/2, height/1.25);
  pop();
}