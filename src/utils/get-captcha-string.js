const getSecureRandomInt = (min, max) => {
  const randomArray = new Uint32Array(1);
  crypto.getRandomValues(randomArray);
  const randomString = `0.${randomArray[0]}`;
  const randomNumber = Number(randomString);
  return Math.floor(randomNumber * (max - min + 1) + min);
};

const getRandomSpecialChar = () => {
  const specialCharOptions = [33, 35, 36, 37, 38, 42, 60, 61, 62, 63, 64];
  return String.fromCharCode(
    specialCharOptions[getSecureRandomInt(0, specialCharOptions.length - 1)]
  );
};

const getRandomUpperCaseLetter = () =>
  String.fromCharCode(getSecureRandomInt(65, 90));

const getRandomLowerCaseLetter = () => String.fromCharCode(97, 122);

const characterOptions = ["number", "uppercase", "lowercase", "special"];

const getRandomCharForCaptcha = () => {
  switch (
    characterOptions[getSecureRandomInt(0, characterOptions.length - 1)]
  ) {
    case "number":
      return getSecureRandomInt(0, 9);
    case "uppercase":
      return getRandomUpperCaseLetter();
    case "lowercase":
      return getRandomLowerCaseLetter();
    case "special":
      return getRandomSpecialChar();
    default:
      return getSecureRandomInt(0, 9);
  }
};

const getCaptchaString = () => {
  let captchaString = "";
  const numberOfCharsInString = getSecureRandomInt(5, 8);
  for (let i = 0; i < numberOfCharsInString; i++) {
    captchaString += getRandomCharForCaptcha();
  }
  return captchaString;
};

export { getCaptchaString };
