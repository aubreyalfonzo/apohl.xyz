function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

// let img;

// function preload(){
// 	img = loadImage("https://i.imgur.com/0wBoDBy.gif");
// }

let r = 242; let g = 242; let b = 242;

let bgd = 242;

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	noFill();
	stroke(random(255), random(255), random(255));
	strokeWeight(1);
	
}

function draw() {
	background(242, 25);

	// if(mouseIsPressed){
	// 	bgd = random(100, 242);
	// }

	// background(bgd, 25);

	r=map(mouseX,0,width,242,255);
  	g=map(mouseX,0,width,242,225);
  	b=map(mouseY,0,width,242,200);
  	background(r,g,b, 25);

	let f = 100 + sin(frameCount*.05)*50;
	
	// ellipse(mouseX, mouseY, f);
	line(0, 0, mouseX, mouseY);
	line(width, 0, mouseX, mouseY);
	line(0, height, mouseX, mouseY);
	line(width, height, mouseX, mouseY);

	
	// image(img, mouseX, mouseY);
	
}

function mousePressed(){
	redraw();
	stroke(random(255), random(255), random(255));
}