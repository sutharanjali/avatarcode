class MovingText {
  constructor(_writing, _size, _yPos, _frameSpeed) {
    this.writing = _writing;
    this.size = _size;
    this.yPos = _yPos;
    this.frameSpeed = _frameSpeed
  }

  move() {
    let textPos = 0;
    textPos = frameCount * this.frameSpeed;
    if (textPos >= width) {
      textPos = 0;
      frameCount = 0;
    }
    textFont('Luminari', this.size);
    fill('white');
    text(this.writing, textPos, this.yPos);

    //rotating ray of light
    push();
    let pos = map(mouseX,0,500,0,5)
    fill('gold');
    translate(width / 2, 90);
    for (let i = 0; i < 15; i++) {
      ellipse(0, 50, 10, 55);
      rotate(PI / pos);
    }
    pop();
  }
}
