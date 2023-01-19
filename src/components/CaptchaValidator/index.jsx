import { CaptchaGenerator } from "../CaptchaGenerator";
import { TextBox } from "../TextBox";
import "./CaptchaValidator.css";

const CaptchaValidator = () => {
  return (
    <div className="captcha-validator-wrapper">
      <CaptchaGenerator />
      <TextBox
        inputType="text"
        inputName="captcha"
        inputPlaceholder="Enter Captcha"
      />
    </div>
  );
};

export { CaptchaValidator };
