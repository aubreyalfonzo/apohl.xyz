function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

// let table;

// function preload(){
// 	table = loadTable('https://raw.githubusercontent.com/aubreyalfonzo/apohl/master/data/data_msu/S_22/HGD/NAMES.csv', 'csv', 'header');
// }

let names = [
"Bell, Mason K",
"Brooks, Austin D",
"Burnett, Emmanuel Bernard",
"Chambers, Ana N",
"Colbert, Kaylen E",
"Demus, Sarah Danielle",
"Denson, Ashley Shea",
"Gray, Makenzie C",
"Halliday, Amber Rose",
"Hardy, Daniel",
"Hardy, Steven R",
"Hardy, William Thomas",
"Harris, Robert Cantrell",
"Hunt, Sidnie Cheyenne",
"Nause, Katherine D",
"Nichols, Avery Madison",
"Pitts, Hallie Ann",
"Russell, Sadie Booth",
"Sheffer, Margaret Lauren",
"Sherrell, Mackenzie G",
"Shimp, Molinda Jane",
"Snaer, Jaliyah Jasmine",
"Timmons, Sophia Deslonde",
"Weekley, Jacob F",
"Wigant, Paige Elizabeth",
"Wisener, Leah K",
"Yzaguirre, Bryce Aaron"
];

let index = 0;

function setup() {
	background(0);
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(width/11);
	fill(255);
	
	
}

function draw() {
	background(0);
	// let name = 'RANDOM STUDENT';
	
	// let m = map(0, 0, width, 0, width, true);
	
	text(random(names), width/2, height/2);
	
	// print(names);
}

function keyPressed(){
	
	if(key == ' '){
	noLoop();
	}else{
		loop();
	}
	
}