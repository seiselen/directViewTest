
//var button;

var rectDims;

function setup() {

  createCanvas(600,600);
  textSize(15);
  
  rectDims = [0,0,100,100];
  
  //button = createButton('click me');
  //button.position(19, 19);
  //button.mousePressed(changeBG);
}

function draw(){
  
  background(180);
  
  fill(0,120,255);
  
  rect(rectDims[0],rectDims[1],rectDims[2],rectDims[3]);
  
  
  
  
}

function mousePressed(){
  
  if(mouseButton == LEFT){
    rectDims[2]=mouseX-rectDims[0];
    rectDims[3]=mouseY-rectDims[1];
  }
  else if(mouseButton == CENTER){
    rectDims[0]=mouseX;
    rectDims[1]=mouseY;
  }
  

  
}

function changeBG() {
  var val = random(255);
  console.log("val =" + val);
  background(0,val,255);
}