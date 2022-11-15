import p5 from "p5";
import { useCallback, useRef } from "react";
import Sketch from "../Sketch";

const FirstSketch = () => {
  const removeRef = useRef<Function | undefined>();

  const sketch = useCallback((p: p5) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth, window.innerHeight);
      p.stroke(255);
      p.noFill();
    };

    p.draw = () => {
      p.background(0);
      for (let i = 0; i < 200; i += 20) {
        p.bezier(
          p.mouseX - i / 2.0,
          40 + i,
          420,
          20,
          440,
          300,
          240 - i / 16.0,
          300 + i / 8.0
        );
      }
    };

    window.addEventListener("resize", () => {
      p.resizeCanvas(window.innerWidth, window.innerHeight);
    });

    removeRef.current = p.remove;
  }, []);

  return <Sketch sketch={sketch} />;
};

export default FirstSketch;
