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

let names = ["Brennan, Christy",
"Brewer, Samantha",
"Buckholdt, Juliet",
"Clayton, Olyvia",
"Coop, Haley",
"Daschbach, Jane",
"Davis, Collins",
"Deavours, Amelia",
"DeWitt, Walker",
"Dickey, Olivia",
"Ford, William",
"Guzman, Genesis",
"Harjono, Trisha",
"Holloway, Cameron",
"Hutton, Calvin",
"Karlson, James",
"Mace, Jarvis",
"Madison, Noah",
"Martin, Ashley",
"Maxwell, Retta",
"McDunnah, Kate",
"Moore, Clayton",
"Nicks, X'Zadrain",
"Nowlen, Ethan",
"Ruff, Reagan",
"Sanders, Mary Kathryn",
"Seale, Abigail",
"Smith, Dustin",
"Spielman, Sarah Kate",
"Stepp, Zachary",
"Taylor, Taysha",
"Triplett, Jadalyn",
"Tufts, Kathryn",
"Vo, Thomas",
"Walker, Dominik",
"Ward, Aubrey",
"Welch, Chloe",
"Williams, Zoe",
"Wingfield, Alexis",
"Witt, Tucker",
"Wood, Bailey",
"Wynn, Kasey"];

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