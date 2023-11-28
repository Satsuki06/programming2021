// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth,windowHeight );
  fill(0);
  for(let i=0 ; i < 20; i++)
  for(let j=0; j<43; j++)
  Polygon(10,i*70,j*40,40)
}

function draw(){
 
}

function Polygon(n, cx, cy, r){
  beginShape();
  for(let i=0 ; i<20; i++){
  for(let j=0; j<43; j++){
  noFill();
  if(cy<i*110){stroke(200,206,300);}
  else{stroke(135,206,235)}
  beginShape();
  for(let i=0; i<n;i++){
  let theta = TWO_PI * i * 1/ n - HALF_PI;
  let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y)
    
  }
  endShape(CLOSE)
  
}

  }



}


function draw() {
  const cx = width / 2;
  const cy = height / 2;   
  fill(100,149,237);
  noStroke(0);
  ellipse(cx, cy, 500, 120);
  fill(100,149,237);
  noStroke(0);
  ellipse(cx, cy, 120, 500);
  
  fill(255,0,0);
  textSize(30);
  textAlign(CENTER, CENTER);
  text('Nishida', cx , cy);
  drawCheckeredCircle(cx, cy, 110, 90, 4);
  drawCheckeredCircle(cx, cy, 150, 90, 3)
 }

function drawCheckeredCircle(x, y, d, s, checkerSize) {
  push();
  translate(x, y);
  beginShape();
  for (let i = 0; i <= s; i++) {
    let theta = map(i, 0, s, 0, TWO_PI);
    let x = cos(theta) * d / 2;
    let y = sin(theta) * d / 2;
    if (i % 2 === 0) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x, y, checkerSize, checkerSize);
  }
  endShape(CLOSE);
  pop();
}
