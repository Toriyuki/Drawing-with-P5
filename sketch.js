function setup() {
  createCanvas(800, 800);
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

}