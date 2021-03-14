//variables for mic
let c;
let mic;
let textMove1;
let textMove2;
let textMove3;

//variables for unicorn horn
let r = 0;
let g = 0;
let b = 0;

let moveText1;

function setup() {
  createCanvas(500, 500);

  //create mic
  mic = new p5.AudioIn();
  mic.start();

  frameRate(30);

  textMove1 = new MovingText('Speak, friend', 50, width/1.15, 4);//LOTR reference
  textMove2 = new MovingText('Vandë omentaina!', 30, width/4.5,2);//Quenya "Well Met"
  textMove3 = new MovingText('Aníron peded', 70, width/3,3);//Sindarin "I wish to speak"

}

function draw() {
  changeBackground();


  textMove1.move();
  textMove2.move();
  textMove3.move();

  //mic functionality - mouths
  micLevel = mic.getLevel();
  micMap = map(micLevel, 0, 0.3, 20, 95)
  micMapTwo = map(micLevel, 0, 0.7, 15, 55);
  micMapThree = map(micLevel, 0, 1, 25, 100);

  //mic - eyes
  micEyes = map(micLevel, 0, 0.7, height / 2 - 15, height / 2 - 20)

  //map mouseX mouseY for drawUnicorn
  let mouseXPos = map(mouseX, 0, 500, 0, 255);
  let mouseYPos = map(mouseY, 0, 500, 0, 255);

  //draw avatar
  drawBackHair();
  drawFace();
  drawEyes(micEyes);
  drawCurls();
  drawUnicorn(mouseXPos, mouseYPos, 100);
  drawMouths(micMap, micMapTwo, micMapThree);



}


function drawCurls() {
  c = color('#4d2600');
  fill(c);
  strokeWeight(2);
  stroke(10);

  ellipse(width / 2, height / 2 - 100, 40);
  ellipse(width / 2 + 40, height / 2 - 90, 40);
  ellipse(width / 2 + 70, height / 2 - 61, 40);
  ellipse(width / 2 + 83, height / 2 - 23, 40);
  ellipse(width / 2 + 87, height / 2 + 18, 40);
  ellipse(width / 2 + 85, height / 2 + 59, 40);
  ellipse(width / 2 + 83, height / 2 + 100, 40);
  ellipse(width / 2 - 40, height / 2 - 90, 40);
  ellipse(width / 2 - 70, height / 2 - 61, 40);
  ellipse(width / 2 - 83, height / 2 - 23, 40);
  ellipse(width / 2 - 87, height / 2 + 18, 40);
  ellipse(width / 2 - 85, height / 2 + 59, 40);
  ellipse(width / 2 - 83, height / 2 + 100, 40);
}

function drawFace() {
  //face
  c = color('#ffd9b3');
  fill(c);
  ellipse(width / 2, height / 2, 150, 200);

  //nose
  c = color('#ffbf80');
  fill(c);
  ellipse(width / 2, height / 2 + 15, 25, 15);
}

function drawEyes(micEyes) {
  //eyeballs
  c = color('#f2f2f2');
  fill(c);
  stroke(10); //whites
  ellipse(width / 2 - 30, micEyes, 45, 25); //left
  ellipse(width / 2 + 30, micEyes, 45, 25); //right

  //pupils
  noStroke();
  fill('black');
  ellipse(width / 2 - 30, micEyes, 25); //left
  ellipse(width / 2 + 30, micEyes, 25); //right
}

function drawBackHair() {
  //hair back layer
  c = color('#4d2600');
  fill(c);
  ellipse(width / 2, height / 2 - 30, 215, 200);
  rect(width / 2 - 107, height / 2 - 40, 214, 165)
}

function drawUnicorn(r, g, b) {
  //unicorn horn
  c = color(r, g, b);
  fill(c);
  strokeWeight(2);
  stroke(10);

  ellipse(width / 2, height / 2 - 100, 40);
  ellipse(width / 2, height / 2 - 135, 30);
  ellipse(width / 2, height / 2 - 160, 20);
}

function drawMouths(micMap, micMapTwo, micMapThree) {
  noStroke();
  c = color('#ff6666');
  fill(c);

  ellipse(width / 2, height / 2 + 50, micMap / 2, micMap); //middle
  ellipse(width / 2 - 60, height / 2 + 50, 50, micMapTwo); //left
  ellipse(width / 2 + 60, height / 2 + 50, micMapThree); //right
}

function changeBackground() {
  background(r, g, b);
  if (mouseX <= 200 && mouseY <= 200) {
    r = 102;
    g = 195;
    b = 255;
  } else if (mouseX >= 201 && mouseY <= 200) {
    r = 217;
    g = 140;
    b = 179;
  } else if (mouseX <= 200 && mouseY >= 201) {
    r = 255;
    g = 153;
    b = 51;
  } else {
    r = 102;
    g = 204;
    b = 153;
  }
}
