import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DrawingCanvas = () => {
  const canvasRef = useRef(null);
  let ctx;
  let isDrawing = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    // Set up initial canvas properties
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    // Event listeners for drawing (Mouse)
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', finishDrawing);
    canvas.addEventListener('mouseout', finishDrawing);

    // Event listeners for drawing (Touch)
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', finishDrawing);

    return () => {
      // Cleanup event listeners when component is unmounted
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', finishDrawing);
      canvas.removeEventListener('mouseout', finishDrawing);

      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('touchend', finishDrawing);
    };
  }, []);

  const startDrawing = (e) => {
    e.preventDefault();
    if (e.touches && e.touches.length > 1) return;
    isDrawing = true;
    const { clientX, clientY } = getEventCoordinates(e);
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const { clientX, clientY } = getEventCoordinates(e);
    const { left, top } = canvasRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const finishDrawing = () => {
    isDrawing = false;
    ctx.closePath();
  };

  const getEventCoordinates = (e) => {
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    return { clientX, clientY };
  };

  const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext('2d');

    // Set white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        style={{ border: '1px solid black' }}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={finishDrawing}
      ></canvas>
      <button onClick={clearCanvas}>Clear</button>
      <div>
      <Link to ="/">
        <button>Home</button>
      </Link>
      </div>
      <div className="swipe">SWIPE UP &#8593;</div>
    </div>
  );
};

export default DrawingCanvas;
