function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	textSize(width/6);
	textAlign(CENTER, CENTER);
	
	// fill(150, 0, 250);
	fill(250, 0, 150);
	
}

function draw() {
	// background(230, 50, 125, 20);
	background(125, 50, 230, 20);
	
	translate(width/2, height/2);
	rotate(frameCount*.02);
	rotate(mouseX/20);
	
	text('S22_3323_02', 0, 0);
}

function mousePressed(){
	window.open("https://apohl.xyz/MSU/msu/spring_22/3323_02_S_22");
}