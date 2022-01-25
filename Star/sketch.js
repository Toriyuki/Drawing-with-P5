function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  noStroke();
  fill(255);
  ellipse(120, 120, 120, 120);

  fill(0, 180, 0);
  ellipse(120, 120, 110, 110);

  stroke(255);
  fill(255);
  beginShape();
  vertex(120, 60);
  vertex(140, 90);
  line(140, 100, 180, 100);
  line(180, 100, 150, 120);
  line(140, 120, 150, 180);
  line(150, 180, 120, 140);

}