let w,h;

let img = [];
let index = 0;

function preload(){
	
	img[0] = loadImage("https://i.imgur.com/7NNG5vB.png");
	img[1] = loadImage("https://i.imgur.com/OV9iOTG.png");
	img[2] = loadImage("https://i.imgur.com/E5KYxL6.png");
	img[3] = loadImage("https://i.imgur.com/A5lXjpE.png");
	img[4] = loadImage("https://i.imgur.com/2VGrSFQ.png");
}

function setup(){
	createCanvas(windowWidth, windowHeight);

	background(0);

	w = width/2;
	h = height/2;

	imageMode(CENTER);
}

function draw(){
	background(0, 50);

	// w = sin(frameCount*.0005)*width;
	// h = sin(frameCount*.0005)*height;

	// if(mouseX > 0){
	// 	w = mouseX;
	// 	h = mouseY;
	// }

	// push();

	translate(w, h);

	let rot = mouseX/5+mouseY/5;
	rotate(radians(rot));
	rotate(radians(-frameCount*.05));
	image(img[index], 0, 0);

	// pop();
}

function mousePressed() {
  index = index + 1;
  
  if(index == img.length){
   	index = 0; 
  }
}