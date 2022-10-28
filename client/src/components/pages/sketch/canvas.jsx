import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "./index.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [drawing, setDrawingStatus] = useState(false);

  const user = useSelector((state) => state.UserReducer.user);

  const stopDrawing = () => {
    contextRef.current.closePath();
    setDrawingStatus(false);
  };

  const startDrawing = ({ nativeEvent }) => {
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
    context.strokeStyle = user.color;
    context.lineWidth = 2;
    contextRef.current = context;
  }, []);

  return (
    <canvas
      className="board"
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    >
      Sorry, your browser does not support HTML5 canvas
    </canvas>
  );
};

export default Canvas;
