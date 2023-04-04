function setup() {
	createCanvas(windowWidth, windowHeight);
	
	noFill();
	stroke(random(255), random(255), random(255));
	strokeWeight(1);
	
}

function draw() {
	background(242, 25);

	let f = 100 + sin(frameCount*.05)*50;
	
	ellipse(mouseX, mouseY, f);
	
}