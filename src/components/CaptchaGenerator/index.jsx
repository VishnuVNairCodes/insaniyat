import { Captcha } from "../Captcha";
import "./CaptchaGenerator.css";

const CaptchaGenerator = () => {
  return (
    <div className="captcha-generator-container">
      <div className="captcha-wrapper">
        <Captcha />
      </div>
      <button className="btn-icon btn-refresh-captcha">
        <i className="fa-solid fa-rotate-right"></i>
      </button>
    </div>
  );
};

export { CaptchaGenerator };
