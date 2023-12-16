function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let img;

function preload(){
	img = loadImage("https://i.imgur.com/NHirouY.gif");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	// imageMode(CENTER, CENTER);
	
	
	
}

function draw(){
	background(0, 255);
	
	
	image(img, mouseX, mouseY);
}
