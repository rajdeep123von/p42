

function setup() {
  createCanvas(400,400);
  
  
  angleMode(DEGREES);
  
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let mi = millis();
  let mc = millis()*1000;
  strokeWeight(8);
 

  stroke(252,0,174);
  noFill();
  miAngle = map(mi,0,1000,0,360);
  arc(0,0,320,320,0,miAngle );

  stroke(243,251,8);
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);  

  stroke(130,106,255);
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle );

  stroke(0,255,75);
  hrAngle = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle );

  stroke(153,251,190);
  mcAngle = map(mc,0,1000,0,360);
  arc(0,0,340,340,0,mcAngle);  


  push();
  rotate(mcAngle);
  stroke(153,251,190);
  strokeWeight(1);
  line(0,0,70,0);
  pop();


  push();
  rotate(miAngle);
  stroke(252,0,174);
  strokeWeight(2);
  line(0,0,80,0);
  pop();


  push();
  rotate(scAngle);
  stroke(243,251,8);
  strokeWeight(3.5);
  line(0,0,115,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(130,106,255);
  strokeWeight(7);
  line(0,0,110,0);
  pop();

  
  push();
  rotate(hrAngle);
  stroke(0,255,75);
  strokeWeight(15);
  line(0,0,90,0);
  pop();

  stroke(255);
  strokeWeight(15);
  point(0,0);

  
 
}