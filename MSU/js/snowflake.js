function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let snowflake = [];
let w, h;
let fall = 1;

function preload(){
	
	// for(i = 0; i<15; i++){
	// 	snowflakes[i] = loadImage();
	// }
	
	snowflake[0] = loadImage("https://i.imgur.com/Tg1NC02.png");
	snowflake[1] = loadImage("https://i.imgur.com/tFf7zr7.png");
	snowflake[2] = loadImage("https://i.imgur.com/KE2Px1n.png");
	snowflake[3] = loadImage("https://i.imgur.com/d1m1bqd.png");
	snowflake[4] = loadImage("https://i.imgur.com/dCFNJEW.png");
  snowflake[5] = loadImage("https://i.imgur.com/izz3hMJ.png");
  snowflake[6] = loadImage("https://i.imgur.com/3BCZ3MG.png");
  snowflake[7] = loadImage("https://i.imgur.com/onxWazy.png");
  snowflake[8] = loadImage("https://i.imgur.com/wVZNnDd.png");
  snowflake[9] = loadImage("https://i.imgur.com/XcWT9WL.png");
  snowflake[10] = loadImage("https://i.imgur.com/yCRPVFZ.png");
  snowflake[11] = loadImage("https://i.imgur.com/qvqUa0J.png");
  snowflake[12] = loadImage("https://i.imgur.com/5N8Wp0J.png");
  snowflake[13] = loadImage("https://i.imgur.com/UngNRyR.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	imageMode(CENTER);
	
	h = 0;
	
	// textSize(100);
	fill(255);
	textAlign(CENTER, CENTER);
	
	
}

function draw() {
	background(0, 15);
	
	translate(width/2, 0);
	
	let m = map(500, 0, 500, 0, width/2, true);
	
	w = cos(frameCount*.005)*m+(mouseX/5);
	h = h + fall;
	
	let ht = map(h, 0, height, 0, height, true)+(mouseY/2);
	
	if(h > height){
		h = 0;
		w = 0;
	}
	
	
	push();
	let ts= sin(frameCount*.02);
	textSize(width/10);
	textStyle(BOLDITALIC);
	blendMode(OVERLAY);
	text("HAPPY", w, h);
	text("HOLIDAYS", -w, h+200);
	pop();
	
	let flakeSize = sin(frameCount*.05)*300
  
  let w2 = width/5;
  let w3 = width/3;
  
  let h2 = height/5;
  let h3 = height/3;
	
	for(i = 0; i<4; i++){
		image(snowflake[0], w, ht*i, flakeSize, 300);
		image(snowflake[1], -w, ht*i, flakeSize, 300);
		image(snowflake[2], w+w2, ht*i+h2, 300, flakeSize);
		image(snowflake[3], -w-w2, ht*i+h2, 300, 100+flakeSize);
		image(snowflake[4], w+w3, ht*i+h3, flakeSize, 300);
		image(snowflake[5], -w-w3, ht*i+h3, flakeSize, 300);
		image(snowflake[6], w-w2, ht*i-h2, 300, flakeSize);
		image(snowflake[7], -w+w2, ht*i-h2, 300, flakeSize);
		image(snowflake[8], w-w3, ht*i-h3, flakeSize, 300);
		image(snowflake[9], -w+w3, ht*i-h3, flakeSize, 300);
		image(snowflake[10], w+w3+250, ht*i+h2, 300, 100+flakeSize);
		image(snowflake[11], -w+w2+250, ht*i+h2, 300, flakeSize);
		image(snowflake[12], w-w2+250, ht*i-h3, flakeSize, 300);
		image(snowflake[3], -w-w3+250, ht*i-h3, flakeSize, 300);
		
	}
	
	// print(frameCount);
	
	// if(frameCount > 1000){
	// 	redraw();
	// }
	
	
} 
