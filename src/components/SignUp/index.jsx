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
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </article>
  );
};

export { Signup };
