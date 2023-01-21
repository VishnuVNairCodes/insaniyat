const TextBox = ({
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  setInputValues,
}) => {
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={(e) =>
        setInputValues((prev) => ({ ...prev, [inputName]: e.target.value }))
      }
      className="textbox"
    />
  );
};

export { TextBox };
