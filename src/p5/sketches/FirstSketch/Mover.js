import p5 from "p5";

class Mover {
  constructor(p: p5, x, y) {
    this.p = p;
    this.position = p.createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = p5.Vector.random2D();
  }

  update() {
    const mouseVect = this.p.createVector(this.p.mouseX, this.p.mouseY);
    this.acceleration = p5.Vector.sub(mouseVect, this.position).setMag(0.25);
    this.velocity.add(this.acceleration).limit(5);
    this.position.add(this.velocity);
  }

  show() {
    this.p.stroke(255);
    this.p.strokeWeight(2);
    this.p.fill(255, 100);
    this.p.ellipse(this.position.x, this.position.y, 32);
  }
}

export default Mover;
