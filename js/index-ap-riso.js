let libs = ['includes/libs/p5.riso.js'];

// let ditherType = 'floydsteinberg';

let img;

let pink;
let blue;
let green;

function preload(){
	img = loadImage('../data/assets/ME.png');
}

function setup() {
	background(255);
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	
	pink = new Riso('fluorescentpink');
	blue = new Riso('blue');
	green = new Riso('lightlime');
	
	blue.stroke()
	
	pink.fill(255);
	blue.fill(255);
	green.fill(255);
	
	img.resize(500, 500)
}

function draw() {
	background(255, 200);
	pink.background(255, 100);
	blue.background(255, 100);
	green.background(255, 100);
	
	push();
	imageMode(CENTER);
	// let dithered1 = ditherImage(img, ditherType, 50);
	image(img, width/2, height/2);
	pop();
	
	pink.ellipse(width/2, mouseY, 200);
	blue.ellipse(mouseX, height/2, 200);
	green.ellipse(mouseX, mouseY, 200);
	
	green.line(width/2, mouseY, mouseX, height/2);
	green.line(mouseX, height/2, mouseX, mouseY);
	green.line(mouseX, mouseY, width/2, mouseY);
	
	pink.line(0, 0, mouseX, mouseY);
	blue.line(width, 0, mouseX, mouseY);
	pink.line(width, height, mouseX, mouseY);
	blue.line(0, height, mouseX, mouseY);
	
	
	drawRiso();
}