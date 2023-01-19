import { CaptchaValidator } from "../CaptchaValidator";
import { TextBox } from "../TextBox";
import "./Signup.css";

const Signup = () => {
  const inputFields = [
    { inputName: "name", inputPlaceholder: "Name", inputType: "text" },
    { inputName: "email", inputPlaceholder: "Email", inputType: "email" },
    {
      inputName: "password",
      inputPlaceholder: "Password",
      inputType: "password",
    },
    {
      inputName: "confirm-password",
      inputPlaceholder: "Confirm Password",
      inputType: "password",
    },
  ];
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
          />
        );
      })}
      <CaptchaValidator />
      <button className="btn btn-primary">Signup</button>
    </article>
  );
};

export { Signup };
