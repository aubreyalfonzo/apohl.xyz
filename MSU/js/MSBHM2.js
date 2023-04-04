function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img, img1, img2;
// let font;

let font = googleFont('Volkhov');


function preload(){
	img = loadImage("https://i.imgur.com/yqTqaSZ.png");
	img1 = loadImage("https://i.imgur.com/7LaSjsL.png");
	img2 = loadImage("https://i.imgur.com/FwdGjm9.png");
	
	// font = loadFont("../data/data_msu/S_22/GD2_P1/Redaction20-Bold.otf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CENTER);
	// blendMode(DIFFERENCE);
	
	textFont(font);
	textAlign(CENTER, CENTER);
	textSize(width/5);

	
}

function draw() {
	background(0);
	angleMode(DEGREES);

	let x = width/3.1;
	let x2 = width/1.445;

	let rotManip = (frameCount*.5)+mouseX/5;

	img.resize(width, height);
	img1.resize(width, height);
	// img2.resize(width, height);
	
	image(img, width/2, height/2);
	text("THANK", width/2, height/2.5);
	text("YOU", width/2, height/1.5);
	
	push();
	blendMode(DIFFERENCE);
	image(img1, width/2, height/2);
	push();
	translate(width/2, height/2);
	rotate(rotManip);
	image(img2, 0, 0);
	pop();
	pop();

	if(windowWidth < 1000){
		textSize(width/4);
	}


}


function googleFont(fontName) {
	let link = document.createElement("link")
	link.href = "https://fonts.googleapis.com/css?family=" + encodeURI(fontName) + '&display=swap'
	link.rel = "stylesheet"
	document.head.appendChild(link)
	return fontName
}