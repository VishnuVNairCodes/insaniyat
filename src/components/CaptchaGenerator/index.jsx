import { drawCaptcha, getCaptchaString } from "../../utils";
import { Captcha } from "../Captcha";
import "./CaptchaGenerator.css";

const CaptchaGenerator = ({ canvasRef, captchaStringRef }) => {
  const handleCaptchaRefresh = () => {
    captchaStringRef.current = getCaptchaString();
    drawCaptcha(canvasRef, captchaStringRef.current);
  };
  return (
    <div className="captcha-generator-container">
      <div className="captcha-wrapper">
        <Captcha canvasRef={canvasRef} />
      </div>
      <button
        type="button"
        onClick={handleCaptchaRefresh}
        className="btn-icon btn-refresh-captcha"
      >
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export { CaptchaGenerator };
