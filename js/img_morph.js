function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let img, img2, img3;

// let layer;

// let img = [];
// let toggle = 0;

function preload() {
	
	img = loadImage('https://i.imgur.com/yLNNcfo.png');
	img3 = loadImage('https://i.imgur.com/fEEBcrb.png');
}

function setup() {
	background(200);
	createCanvas(windowWidth, windowHeight, WEBGL);
	// imageMode(CENTER);

	layer = createGraphics(windowWidth, windowHeight);
	
	textureWrap(MIRROR, MIRROR);

	strokeWeight(0);

	img.resize(1024, 1024);
	img3.resize(1024, 1024);

	img2 = createImage(img.width, img.height);

	img.loadPixels();
	img2.loadPixels();
	img3.loadPixels();
	
	for(let x = 0; x < img.width * 4; x++) {
		for(let y = 0; y < img.height; y++) {
			for(let i = 0; i < img.width / img.height; i++) {
				let index = (x + y * width) * 4;
				
				img2.pixels[index - 4] = img3.pixels[index + 4];
				img2.pixels[index - 10] = img3.pixels[index + 10];
				img2.pixels[index + 95] = img.pixels[index - 95];
				// img2.pixels[index + 3] = img.pixels[index + 2];
			}
		}
	}
	
	img.updatePixels();
	img3.updatePixels();
	img2.updatePixels();

}

function draw() {
	// background(200);

	orbitControl(1, 1, 0);
	
	let mv = sin(frameCount*.005)*2;

	// img2 = createImage(img.width, img.height);
	
	// img.loadPixels();
	// img2.loadPixels();
	
	// for(let x = 0; x < img.width * 4; x++) {
	// 	for(let y = 0; y < img.height; y++) {
	// 		for(let i = 0; i < img.width / img.height; i++) {
	// 			let index = (x + y * width) * 4;
				
	// 			img2.pixels[index + mouseX] = img.pixels[index + 0];
	// 			img2.pixels[index + mouseY] = img.pixels[index + 1];
	// 			img2.pixels[index + mouseX-mouseY] = img.pixels[index + 2];
	// 			img2.pixels[index + 3] = img.pixels[index + 2];
	// 		}
	// 	}
	// }
	
	// img.updatePixels();
	// img2.updatePixels();

	let dX = mouseX/mouseY;
	let dY = mouseY/100;

	let u = lerp(1.0, 2.0, dX+mv);
	let v = lerp(1.0, 2.0, dY+mv);

	if(windowWidth > windowHeight){
	texture(img2);
	}else{
		if(windowWidth < windowHeight){
			texture(img3);
		}
	}
	
	textureMode(NORMAL);

	beginShape(TRIANGLE_STRIP);
	vertex(-width/2, height/2, 0, 0, 0);
	vertex(-width/2, -height/2, 0, u, 0);
	vertex(0, height/2, 0, u, v);
	vertex(0, -height/2, 0, u, v);
	vertex(width/2, height/2, 0, 0, v);
	vertex(width/2, -height/2, 0, 0, 0);
	endShape();

	push();
	orbitControl(0, 0, 0);
	texture(img3);
	rotate(radians(frameCount*.05));
	rotateX(mouseX/width);
	rotateY(mouseY/height);
	// if(windowWidth > windowHeight){
	// sphere(width/2);
	// }else{
	// 	if(windowWidth < windowHeight){
	// 		sphere(height);
	// 	}
	// }
	pop();


}