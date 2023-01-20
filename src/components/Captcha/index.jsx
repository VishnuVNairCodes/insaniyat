import { useEffect, useRef } from "react";
import { drawCaptcha } from "../../utils";
import "./Captcha.css";

const Captcha = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCaptcha(canvasRef);
  });

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="50"
      className="captcha-canvas"
    ></canvas>
  );
};

export { Captcha };
