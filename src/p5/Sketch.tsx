import React, { useLayoutEffect, useRef } from "react";
import p5 from "p5";
import styled from "styled-components";

const Canvas = styled.div``;

interface SketchProps {
  sketch: (p: p5) => void;
  className?: string;
}

const Sketch = ({ sketch, className = "" }: SketchProps) => {
  const p5Ref = useRef<p5 | undefined | null>();
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      p5Ref.current = new p5(sketch, canvas);
    }
  }, [sketch]);

  useLayoutEffect(() => {
    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove();
      }
    };
  }, []);

  return <Canvas className={className} ref={canvasRef} />;
};

export default Sketch;
