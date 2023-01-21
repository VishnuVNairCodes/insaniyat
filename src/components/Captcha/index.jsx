import { useEffect } from "react";
import { drawCaptcha } from "../../utils";
import "./Captcha.css";

const Captcha = ({ canvasRef }) => {
  useEffect(() => {
    drawCaptcha(canvasRef);
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="70"
      className="captcha-canvas"
    ></canvas>
  );
};

export { Captcha };
