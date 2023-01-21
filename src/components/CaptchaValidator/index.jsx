import { CaptchaGenerator } from "../CaptchaGenerator";
import { TextBox } from "../TextBox";
import "./CaptchaValidator.css";

const CaptchaValidator = ({ inputValue, setInputValues }) => {
  return (
    <div className="captcha-validator-wrapper">
      <CaptchaGenerator />
      <TextBox
        inputType="text"
        inputName="captcha"
        inputPlaceholder="Enter Captcha"
        inputValue={inputValue}
        setInputValues={setInputValues}
      />
    </div>
  );
};

export { CaptchaValidator };
