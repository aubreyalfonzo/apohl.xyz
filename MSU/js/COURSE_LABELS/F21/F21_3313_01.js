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
	
	fill(150, 0, 250);
	
}

function draw() {
	background(230, 50, 125, 20);
	
	translate(width/2, height/2);
	rotate(frameCount*.02);
	rotate(mouseX/20);
	
	text('F21_3313_01', 0, 0);
}

function mousePressed(){
	window.open("https://apohl.xyz/MSU/msu/fall_21/3313_01");
}