function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let buttRand;

let ltemp =["iced", "hot"];
let ldrink=["latte", "cappuccino", "cortado", "americano", "cold brew", "chai"];
let lsyrup=["vanilla", "lavendar", "honey", "almond", "p spice", "rasp green tea", "dark chocolate", "caramel"];
let lextra=["cinnamon", "", "??syrup??", "", "nutmeg", ""]


function setup() {
	background(0);
	createCanvas(windowWidth, windowHeight);
	
	// temp = "iced"
	
	textSize(width/8);
	textAlign(CENTER, CENTER);
	fill(255);
	rectMode(CENTER);
	
	buttRand = createButton('CLICK FOR IMPROV COFFEE!');
	
	buttRand.position(0, height-100);
	buttRand.size(width, 100);
	
	buttRand.mousePressed(improvCoffee);
	
}

function draw() {
	// background(0);
}

function improvCoffee(){
	background(0);
	
	
	push()
	textSize(25);
	text("cold brew is iced only! (duh)", width/2, 50);
	pop()
	
	text(random(ltemp), width/2, height/6);
	text(random(ldrink), width/2, height/3);
	text(random(lsyrup), width/2, height/2);
	text(random(lextra), width/2, height/1.5);
	
	
	
	
}