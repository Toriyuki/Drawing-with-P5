function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  let nextBox = 200;


  //Cirle and rectangle
  //Fills in background to green
  noStroke();
  fill(0, 255, 0);
  rect(0, 0, 200, 200);

  //Creates a circle and rectangle
  stroke(0);
  fill(255);
  ellipse(60, 60, 60);
  rect(120, 30, 60, 60);


  //Venn diagram of 3 base colors of red, green, and blue
  //Enables no Stroke to drawings
  noStroke();

  //Makes the 3 cirles of different colors
  fill(255, 0, 0, 100);
  ellipse(nextBox + 60, 60, 60);
  fill(0, 0, 255, 100);
  ellipse(nextBox + 40, 90, 60);
  fill(0, 255, 0, 100);
  ellipse(nextBox + 80, 90, 60);


  //Pac-Man and Ghost
  //Draws black background
  fill(0);
  rect(0, nextBox, 200, 200);

  //Sets color to yellow and draws Pac-Man
  fill(255, 255, 0);
  arc(60, nextBox + 60, 60, 60, -1 * (HALF_PI + QUARTER_PI), HALF_PI + QUARTER_PI, PIE);
  
  //Sets color to red and draws the ghost
  fill(255, 0, 0);
  arc(140, nextBox + 60, 60, 60, PI, 0, PIE);
  rect(110, nextBox + 60, 60, 30);
  
  //Sets color to white and draws the outer eyes of the ghost
  fill(255);
  ellipse(125, nextBox + 60, 18, 18);
  ellipse(155, nextBox + 60, 18, 18);
  
  //Sets color to blue and draws the inner eyes of the ghost
  fill(0, 0, 255);
  ellipse(125, nextBox + 60, 10, 10);
  ellipse(155, nextBox + 60, 10, 10);


  //Cirle with star in middle
  //Fills in background to blue
  fill(0, 0, 255);
  rect(nextBox, nextBox, 200, 200);

  //Creates a white circle
  fill(255);
  ellipse(nextBox + 100, nextBox + 100, 100, 100);

  //Creates an inner green circle
  fill(0, 180, 0);
  ellipse(nextBox + 100, nextBox + 100, 90, 90);

  //White star
  stroke(255);
  fill(255);
  beginShape();
  vertex(nextBox + 67.508, nextBox + 140);
  vertex(nextBox + 100, nextBox + 50);
  vertex(nextBox + 132.492, nextBox + 140);
  vertex(nextBox + 51.495, nextBox + 83.147);
  vertex(nextBox + 148.505, nextBox + 83.147);
  endShape(close);
  
  //Red star
  noStroke();
  fill(255, 0, 0);
  beginShape();
  vertex(nextBox + 128.950, nextBox + 136.408);
  vertex(nextBox + 100, nextBox + 55);
  vertex(nextBox + 71.050, nextBox + 136.406);
  vertex(nextBox + 142.798, nextBox + 84.594);
  vertex(nextBox + 57.202, nextBox + 84.594);
  endShape(close);
}