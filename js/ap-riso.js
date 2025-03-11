function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let libs = ['../js/includes/libs/p5.riso.js'];

// let ditherType = 'floydsteinberg';

let pink;
let blue;
let green;

function setup() {
	background(255);
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	
	pink = new Riso('fluorescentpink');
	blue = new Riso('blue');
	green = new Riso('lightlime');
	
	blue.stroke();
	
	pink.fill(255);
	blue.fill(255);
	green.fill(255);
}

function draw() {
	background(255, 200);
	pink.background(255, 100);
	blue.background(255, 100);
	green.background(255, 100);
	
	let shapesize = width/8;
	
	pink.ellipse(width/2, mouseY, shapesize);
	blue.ellipse(mouseX, height/2, shapesize);
	green.ellipse(mouseX, mouseY, shapesize);
	
	green.line(width/2, mouseY, mouseX, height/2);
	green.line(mouseX, height/2, mouseX, mouseY);
	green.line(mouseX, mouseY, width/2, mouseY);
	
	pink.line(0, 0, mouseX, mouseY);
	blue.line(width, 0, mouseX, mouseY);
	pink.line(width, height, mouseX, mouseY);
	blue.line(0, height, mouseX, mouseY);
	
	
	drawRiso();
}