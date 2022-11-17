import p5 from "p5";
import { useCallback, useRef } from "react";
import Sketch from "../../Sketch";
import Mover from "./Mover";

const FirstSketch = () => {
  const removeRef = useRef<Function | undefined>();

  const sketch = useCallback((p: p5) => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let origin = { x: width / 2, y: height / 2 };
    const mover = new Mover(p, origin.x, origin.y);

    const resizeCanvas = (w: number, h: number) => {
      width = w;
      height = h;
      origin = { x: w / 2, y: h / 2 };

      p.resizeCanvas(width, height);
    };

    p.setup = () => {
      p.createCanvas(width, height);
      p.frameRate(144);
    };

    p.draw = () => {
      p.background(0);

      mover.show();
      mover.update();
    };

    window.addEventListener("resize", () => {
      resizeCanvas(window.innerWidth, window.innerHeight);
    });

    removeRef.current = p.remove;
  }, []);

  return <Sketch sketch={sketch} />;
};

export default FirstSketch;
