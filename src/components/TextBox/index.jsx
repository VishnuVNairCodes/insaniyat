const TextBox = ({ inputType, inputName, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputPlaceholder}
      className="textbox"
    />
  );
};

export { TextBox };
