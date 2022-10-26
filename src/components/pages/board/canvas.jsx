import { useRef, useEffect, useState } from "react";
import "./index.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [drawing, setDrawingStatus] = useState(false);

  const onMouseUp = () => {
    contextRef.current.closePath();
    setDrawingStatus(false);
  };

  const onMouseDown = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setDrawingStatus(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!drawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.fillStyle = "#fefefe";
    context.strokeStyle = "black";
    context.lineWidth = 3;
    contextRef.current = context;
  }, []);

  return (
    <canvas
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={draw}
      ref={canvasRef}
    >
      Sorry, your browser does not support HTML5 canvas
    </canvas>
  );
};

export default Canvas;
