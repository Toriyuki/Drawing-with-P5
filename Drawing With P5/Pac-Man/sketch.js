function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Sets background to black
  background(0);

  //Enables no stroke to drawings
  noStroke();

  //Sets color to yellow and draws Pac-Man
  fill(255, 255, 0);
  arc(60, 60, 60, 60, -1 * (HALF_PI + QUARTER_PI), HALF_PI + QUARTER_PI, PIE);

  //Sets color to red and draws the ghost
  fill(255, 0, 0);
  arc(140, 60, 60, 60, PI, 0, PIE);
  rect(110, 60, 60, 30);

  //Sets color to white and draws the outer eyes of the ghost
  fill(255);
  ellipse(125, 60, 18, 18);
  ellipse(155, 60, 18, 18);

  //Sets color to blue and draws the inner eyes of the ghost
  fill(0, 0, 255);
  ellipse(125, 60, 10, 10);
  ellipse(155, 60, 10, 10);

}