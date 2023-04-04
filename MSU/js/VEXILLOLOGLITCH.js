/* CUSTOM FUNCTIONS FOR P5LIVE */
// keep fullscreen if window resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
	return oVal += (iVal - oVal) * eVal;
}

let data;
let img;

/////////////////////////////////////////////////////////////////////////////////////
function preload() {
	img = loadImage('https://cdn.glitch.com/7df16152-b5e4-4102-9e70-fa3afb0ed567%2Fflag_0.png?v=1591857199811');
  data = loadTable('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv', 'csv', 'header');
}

/////////////////////////////////////////////////////////////////////////////////////
function setup() {
	background(0);
	createCanvas(windowWidth, windowHeight);
	textAlign(LEFT);
	textSize(20);
	fill(255);
	imageMode(CENTER);
	rectMode(CENTER);
	pixelDensity(1);
	controls();

	//let rows = data.getRows();
	dt = data.getColumn("date");
	f = data.getColumn("fips");
	c = data.getColumn("cases");
	d = data.getColumn("deaths");

	imag = createImage(img.width, img.height);
	
	//print(fips[5]);
}

/////////////////////////////////////////////////////////////////////////////////////
function controls() {
  
  dl = data.getRowCount() - 1;
  
	rslider = createSlider(0, dl, 0);
	rslider.position(width / 5.4, height / 1.15);
	rslider.style('width:62.5%');
	//fslider.style()
}

/////////////////////////////////////////////////////////////////////////////////////
function draw() {
	background(0);
	
	rs = rslider.value();

	num = data.getNum(rs, 'cases');
	num2 = data.getNum(rs, 'deaths');
	num3 = data.get(rs, 'date');
	
	imag = createImage(img.width, img.height);


	img.loadPixels();
	imag.loadPixels();

	for(let x = 0; x < img.width * 4; x++) {
		for(let y = 0; y < img.height; y++) {
			for(let i = 0; i < img.width / img.height; i++) {
				let index = (x + y * width) * 4;
				//let g = num*x;
				
				imag.pixels[index + num2*i] = img.pixels[index + num2*y];
				imag.pixels[index + num*i] = img.pixels[index + 2-num];
				imag.pixels[index + 2 + num2*i] = img.pixels[index + 2+num2];
				imag.pixels[index + 3] = 255;
			}
		}
	}

	//image(flags[0], width/2, height/2);

	img.updatePixels();
	imag.updatePixels();
	
	image(imag, width / 2, height / 2, img.width * 1.5, img.height * 1.5);

	text("cases:" + num, width / 5.4, height / 8);
	text("deaths:" + num2, width/ 2.1, height/8);
	push();
	textAlign(RIGHT);
	text(num3, width/1.23, height/8);
	pop();
	

	//clear();
}