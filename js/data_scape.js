let obj = [];
let index = 0;

function preload(){
  for(i = 0; i < 7; i++){
  obj[i] = loadModel('https://raw.githubusercontent.com/aubreyalfonzo/NFTVS/master/data/OBJS/DS_' + i + '.obj');
}
}

function setup() {
  let myCanv = createCanvas(windowWidth, windowHeight, WEBGL);
  // myCanv.parent("jsCont");

  frameRate(10);
  background(0);

  
  // noFill();
  // strokeWeight(.1);

}

function draw() {
  // background(220);
  normalMaterial();
  
  translate(0, height / 2.2);
	rotateY(PI / 1.335);
	rotateX(PI / 2);
	// let manip = sin(random(-width*2, width*2)+frameCount*.005);
	let manip = frameCount*.005 + (mouseX + mouseY)/100;
	rotateY(manip);
	rotateX(manip);
  

  model(obj[index]);

  
}

function mousePressed() {
  index = index + 1;
  
  if(index == obj.length){
   	index = 0; 
  }
  
}