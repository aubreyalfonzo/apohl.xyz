function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let libs = ['../js/includes/libs/p5.riso.js'];

// let ditherType = 'floydsteinberg';

// let img;
let gif;

let pink;
let blue;
let green;

// let layer;

let x,y;

let flightspeed;

function preload(){
	img = loadImage('https://raw.githubusercontent.com/aubreyalfonzo/apohl.xyz/refs/heads/main/data/assets/ME.png');
	gif = loadImage('https://raw.githubusercontent.com/aubreyalfonzo/apohl.xyz/refs/heads/main/data/assets/bird.gif');
}

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

	textAlign(CENTER, CENTER);

	x = random(width);
	y = height;
	
	flightspeed = -3;
	
	// img.resize(500, 500);
}

function draw() {
	background(255, 200);
	pink.background(255, 100);
	blue.background(255, 100);
	green.background(255, 100);

	// img.resize(height/2, 0);

	push();
	imageMode(CENTER);
	
	x = x+flightspeed/2;
	y = y+flightspeed;
	
	if(y == 0){
		y = height;
	}else{
		if(x <= 0){
			x = width;
		}
	}
	// image(img, width/2, height/2);
	// image(gif, x, y);
	pop();

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

	text(int(mouseX)+' x '+ int(mouseY), mouseX, mouseY);
	text(int(width/2)+' x '+ int(mouseY), width/2, mouseY);
	text(int(mouseX)+' x '+ int(height/2), mouseX, height/2);

	
	
	drawRiso();
}
