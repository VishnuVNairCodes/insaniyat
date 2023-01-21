import { useEffect, useRef, useState } from "react";
import { drawCaptcha, getCaptchaString } from "../../utils";
import { CaptchaValidator } from "../CaptchaValidator";
import { TextBox } from "../TextBox";
import "./Signup.css";

const Signup = () => {
  const inputFields = [
    { inputName: "userName", inputPlaceholder: "Name", inputType: "text" },
    { inputName: "email", inputPlaceholder: "Email", inputType: "email" },
    {
      inputName: "password",
      inputPlaceholder: "Password",
      inputType: "password",
    },
    {
      inputName: "confirmPassword",
      inputPlaceholder: "Confirm Password",
      inputType: "password",
    },
  ];
  const [inputValues, setInputValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    captcha: "",
  });

  const errorMessages = {
    incompleteForm: "Please fill in all fields",
    passwordsMismatch: "Passwords didn't match. Try Again",
    wrongCaptcha: "Invalid Captcha",
  };
  const [errorMessage, setErrorMessage] = useState("-");
  const isValidationSuccess = errorMessage === "-" ? true : false;

  const captchaStringRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    captchaStringRef.current = getCaptchaString();
    drawCaptcha(canvasRef, captchaStringRef.current);
  }, [canvasRef]);

  const validateSignup = (e, inputValuesObj) => {
    e.preventDefault();
    setErrorMessage("-");
    const { userName, email, password, confirmPassword, captcha } =
      inputValuesObj;
    if (userName && email && password && confirmPassword && captcha) {
      if (password !== confirmPassword) {
        setErrorMessage(errorMessages.passwordsMismatch);
      } else if (inputValues.captcha !== captchaStringRef.current) {
        setErrorMessage(errorMessages.wrongCaptcha);
        setInputValues((prev) => ({ ...prev, captcha: "" }));
        captchaStringRef.current = getCaptchaString();
        drawCaptcha(canvasRef, captchaStringRef.current);
      }
    } else {
      setErrorMessage(errorMessages.incompleteForm);
    }
  };

  return (
    <form
      onSubmit={(e) => validateSignup(e, inputValues)}
      className="signup-container"
    >
      <h3 className="signup-heading">Signup</h3>
      {inputFields.map((inputField) => {
        const { inputName, inputPlaceholder, inputType } = inputField;
        return (
          <TextBox
            key={inputName}
            inputType={inputType}
            inputName={inputName}
            inputPlaceholder={inputPlaceholder}
            inputValue={inputValues[inputName]}
            setInputValues={setInputValues}
          />
        );
      })}
      <CaptchaValidator
        inputValue={inputValues.captcha}
        setInputValues={setInputValues}
        canvasRef={canvasRef}
        captchaStringRef={captchaStringRef}
      />
      <p className={`signup-msg-error ${isValidationSuccess && "hide"}`}>
        {errorMessage}
      </p>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
};

export { Signup };
