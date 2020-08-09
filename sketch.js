let input, length, button;
let input2, diagonal, button3;

function setup() {
  createCanvas(400, 400);
  background(255);

  length = createElement("h3", "what is the length of the square ?");
  length.position(20, 0);

  input = createInput();
  input.position(20, 55);

  button = createButton('submit');
  button.position(input.x + input.width, input.y);
  button.mousePressed(answer);

  length = createElement("h3", "what is the length of the square's diagonal ?");
  length.position(20, 150);

  input2 = createInput();
  input2.position(input.x, input.y + 150);

  button3 = createButton('submit');
  button3.position(input2.x + input2.width, input2.y);
  button3.mousePressed(danswer);

  textAlign(CENTER);
  textSize(15);
}

function answer() {
  const num = input.value();
  var area = num * num;
  var perimeter = 4 * num;

  stroke(0);
  strokeWeight(4);
  fill(255);

  text("length of square = " + num, input.x + 100, input.y + 50);
  text("area of square = " + area, input.x + 100, input.y + 75);
  text("perimeter of square = " + perimeter, input.x + 100, input.y + 100);

  let button2 = createButton('reset');
  button2.position(button.x + button.width, button.y);
  button2.mousePressed(clearCanvas);
}

function danswer() {
  const diag = input2.value();
  var area = 1/2*pow(diag,2);
  var perimeter = round(2 * sqrt(2)* diag, 3);
  var side = round(perimeter/4, 3);

  stroke(0);
  strokeWeight(4);
  fill(255);

  text("length of square diagonal = " + diag, input2.x + 100, input2.y + 50);
  text("area of square = " + area, input2.x + 100, input2.y + 75);
  text("perimeter of square = " + perimeter, input2.x + 100, input2.y + 100);
  text("side of square = " + side, input2.x + 100, input2.y + 125);

  let button2 = createButton('reset');
  button2.position(button3.x + button3.width, button3.y);
  button2.mousePressed(clearCanvas);
}

function clearCanvas() {
  clear();
  background(255);
}