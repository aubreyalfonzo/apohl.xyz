
/* CUSTOM FUNCTIONS FOR P5LIVE */
// keep fullscreen if window resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
	return oVal += (iVal - oVal) * eVal;
}

// processing compatibility
function println(msg){
	print(msg);
}


let obj;

let img;

function preload() {
	obj = loadModel('https://raw.githubusercontent.com/aubreyalfonzo/apohl.xyz/refs/heads/main/data/OBJS/4_25_2022.obj', true);
	img = loadImage('https://raw.githubusercontent.com/aubreyalfonzo/apohl.xyz/refs/heads/main/data/OBJS/textures/81671d1e59ec25a8e57e63c418709d08.jpg')
}

function setup() {
	let myCanv = createCanvas(windowWidth, windowHeight, WEBGL);
	// myCanv.parent("jsCont");

	frameRate(15);
	pixelDensity(1);
	background(225);
	// background(0);


	noFill();
	// strokeWeight(.1);
	// stroke(200);
	// noStroke();
	stroke(0)

}

function draw() {
	background(225);
	// normalMaterial();
	
	orbitControl();

	rotateX(0);
	rotateY(frameCount*.002);
	rotateZ(PI);
	// let manip = sin(random(-width*2, width*2)+frameCount*.005);
	// let manip = frameCount * .005 + (mouseX + mouseY) / 100;
	// rotateY(manip);
	// rotateX(manip);

	scale(10)

	model(obj);
	// texture(0);

}

function keyPressed(){

	if(key === ' '){
		texture(img);
		noStroke();
	}
}

function keyReleased(){

	if(key === ' '){
		// texture(0);
		noFill();
		stroke(0);
	}
}