import { useRef } from "react";
import { drawCaptcha } from "../../utils";
import { Captcha } from "../Captcha";
import "./CaptchaGenerator.css";

const CaptchaGenerator = () => {
  const canvasRef = useRef(null);
  return (
    <div className="captcha-generator-container">
      <div className="captcha-wrapper">
        <Captcha canvasRef={canvasRef} />
      </div>
      <button
        onClick={() => drawCaptcha(canvasRef)}
        className="btn-icon btn-refresh-captcha"
      >
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export { CaptchaGenerator };
