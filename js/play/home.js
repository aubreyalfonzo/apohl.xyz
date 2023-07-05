function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let xoff = 0.0;
let yoff = 0.0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	// rectMode(CENTER);
	
	blendMode(DIFFERENCE);
	// frameRate(15);
	
}


function draw() {
	
	xoff = xoff + 0.01;
	yoff = yoff + 0.01;
	
	// let n = noise(xoff) * random(width)*2;
	// let n2 = noise(yoff) * random(height)*2;

	let n = random(width)*1.5;
	let n2 = random(height)*1.5;
	
	background(0, n/5, n, 5);
	
	
	for (let px = 0; px <= width; px += 25) {
		for (let py = 0; py <= height; py += 25) {
			// fill(0);
			noFill();
			noStroke();
			
	let x2 = n;
	let y2 = n2;
	
	let x3 = mouseX;
	let y3 = mouseY;
	
	if(dist(x2, y2, px, py) < 50){
		fill(255);
	}
	
	if(dist(x3, y3, px, py) < 75){
		fill(100);
		ellipse(px, py, 25, 25);
	}
	
	

			
			
			rect(px, py, 25, 25);
		}
	}
}