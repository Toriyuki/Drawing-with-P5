function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(60, 60, 60);
  fill(0, 0, 255, 100);
  ellipse(40, 90, 60);
  fill(0, 255, 0, 100);
  ellipse(80, 90, 60);
}