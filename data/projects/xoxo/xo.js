function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// custom ease function
function ease(iVal, oVal, eVal){
  return oVal += (iVal - oVal) * eVal;
}

let xoxo = [];
let xo1 = [];
let xo2 = [];
let xo3 = [];
let xo4 = [];
let index = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

function preload(){
	xoxo[0] = loadImage("https://i.imgur.com/rQqfzc8.png");
	xoxo[1] = loadImage("https://i.imgur.com/tvRbiwX.png");
	xoxo[2] = loadImage("https://i.imgur.com/q8R6nae.png");
	xoxo[3] = loadImage("https://i.imgur.com/RTJXlZb.png");
	xoxo[4] = loadImage("https://i.imgur.com/nkD62ia.png");
	xoxo[5] = loadImage("https://i.imgur.com/9qm6WzD.png");
	xoxo[6] = loadImage("https://i.imgur.com/qDMwCdJ.png");
	xoxo[7] = loadImage("https://i.imgur.com/8SAIR96.png");
	xoxo[8] = loadImage("https://i.imgur.com/sTV7nhp.png");

	xo1[0] = loadImage("https://i.imgur.com/giGHJNv.png");
	xo1[1] = loadImage("https://i.imgur.com/Fis6XdE.png");
	xo1[2] = loadImage("https://i.imgur.com/cO5BNLL.png");
	xo1[3] = loadImage("https://i.imgur.com/FVibmz6.png");

	xo2[0] = loadImage("https://i.imgur.com/OlE7Mvb.png");
	xo2[1] = loadImage("https://i.imgur.com/VKwfir9.png");
	xo2[2] = loadImage("https://i.imgur.com/L2isc48.png");
	xo2[3] = loadImage("https://i.imgur.com/pJhI2Gz.png");

	xo3[0] = loadImage("https://i.imgur.com/MjZXwT0.png");
	xo3[1] = loadImage("https://i.imgur.com/oNth6Ms.png");
	xo3[2] = loadImage("https://i.imgur.com/1eik5Yq.png");
	xo3[3] = loadImage("https://i.imgur.com/upfq2Dj.png");

	xo4[0] = loadImage("https://i.imgur.com/d0Vl8GP.png");
	xo4[1] = loadImage("https://i.imgur.com/Mq7Aukg.png");
	xo4[2] = loadImage("https://i.imgur.com/rOazsuP.png");
	xo4[3] = loadImage("https://i.imgur.com/wcRusG3.png");


	// for(let a = 0; a < xoxo.length; a++){
	// 	xoxo[a] = loadImage('data/xoxo/' + a + '.png');

	// }

	// for(let a = 0; a < xoxo.length; a++){
		
	// }

	// for(let a = 0; a < xoxo.length; a++){
		
	// }

	// for(let a = 0; a < xoxo.length; a++){
		
	// }

	// for(let a = 0; a < xoxo.length; a++){
		
	// }
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	textAlign(CENTER, CENTER);
	textSize(15);
	pixelDensity(3);
	
}

function draw() {
	background(255);

	if(width > 1080){
	xoxo[index].resize(width/2, 0);
	xo1[index1].resize(width/7, 0);
	xo2[index2].resize(width/7, 0);
	xo3[index3].resize(width/7, 0);
	xo4[index4].resize(width/7, 0);
}else{
	if(width < 1080){
	xoxo[index].resize(width, 0);
	xo1[index1].resize(width/3, 0);
	xo2[index2].resize(width/3, 0);
	xo3[index3].resize(width/3, 0);
	xo4[index4].resize(width/3, 0);

	}
}

	// image(xoxo[index], width/2, height/2);
	image(xoxo[index], width/2, height/2);

	image(xo1[index1], xo1[index1].width, xo1[index1].height);
	image(xo2[index2], width-xo1[index1].width, xo1[index1].height);
	image(xo3[index3], width-xo1[index1].width, height-xo1[index1].height);
	image(xo4[index4], xo1[index1].width, height-xo1[index1].height);

	text('click/tap to view logos!' ,width/2, height-25);
	
}

function mousePressed(){
	
	index = index + 1;
	index1 = index1 + 1;
	index2 = index2 + 1;
	index3 = index3 + 1;
	index4 = index4 + 1;
	
	if(index == xoxo.length){
		index = 0;
	}

	if(index1 == xo1.length){
		index1 = 0;
	}
	if(index2 == xo2.length){
		index2 = 0;
	}
	if(index3 == xo3.length){
		index3 = 0;
	}
	if(index4 == xo4.length){
		index4 = 0;
	}
	
}

