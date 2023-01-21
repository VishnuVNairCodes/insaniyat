import { useState } from "react";
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

  const validateSignup = (inputValuesObj) => {
    const { userName, email, password, confirmPassword, captcha } =
      inputValuesObj;
    if (userName && email && password && confirmPassword && captcha) {
      if (password !== confirmPassword) {
        setErrorMessage(errorMessages.passwordsMismatch);
      } else if (1) {
        setErrorMessage(errorMessages.wrongCaptcha);
      }
    } else {
      setErrorMessage(errorMessages.incompleteForm);
    }
  };

  return (
    <article className="signup-container">
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
      />
      <p className={`signup-msg-error ${isValidationSuccess && "hide"}`}>
        {errorMessage}
      </p>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </article>
  );
};

export { Signup };
