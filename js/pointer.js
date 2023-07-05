function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	noFill();
	stroke(random(255), random(255), random(255));
	strokeWeight(1);
	
}

function draw() {
	background(242, 25);

	let f = 100 + sin(frameCount*.05)*50;
	
	// ellipse(mouseX, mouseY, f);
	line(0, 0, mouseX, mouseY);
	line(width, 0, mouseX, mouseY);
	line(0, height, mouseX, mouseY);
	line(width, height, mouseX, mouseY);
	
}

function mousePressed(){
	redraw();
	stroke(random(255), random(255), random(255));
}