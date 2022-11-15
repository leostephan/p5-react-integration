import { useLayoutEffect, useRef } from "react";
import p5 from "p5";
import styled from "styled-components";

const Canvas = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

interface SketchProps {
  sketch: (p: p5) => void;
  className?: string;
}

const Sketch = ({ sketch, className = "" }: SketchProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const instance = new p5(sketch, canvas);

      return () => {
        instance.remove();
      };
    }
  }, [sketch]);

  return <Canvas className={className} ref={canvasRef} />;
};

export default Sketch;
