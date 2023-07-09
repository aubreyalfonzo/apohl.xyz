function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let butt;

function setup() {
	createCanvas(windowWidth, windowHeight);
	butt = createButton('GRAYSCALE');
	butt.position(width/2, height-25);
	// butt.mousePressed(buttPress);
	imageMode(CENTER);
	
}

function draw(){
	butt.mousePressed(buttPress);
}

function buttPress() {
	filter(GRAY);
}