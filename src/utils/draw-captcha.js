const addNoise = (context, width, height) => {
  context.fillStyle = "black";
  for (let i = 0; i < (width * height) / 50; i++) {
    context.save();
    let x = Math.random() * width;
    let y = Math.random() * height;
    context.beginPath();
    context.arc(x, y, 1, 0, 2 * Math.PI);
    context.fill();
    context.restore();
  }
};

const drawText = (context, text, x, y) => {
  context.save();
  context.translate(x, y);
  // rotate by a random angle between -15 and 15 degrees
  context.rotate(Math.random() * 0.3 - 0.15);
  context.fillText(text, 0, 0);
  context.restore();
};

const drawCaptcha = (canvasRef, captchaString) => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "22px Arial";
  ctx.fillStyle = "black";
  const x = 100;
  const y = 40;
  drawText(ctx, captchaString, x, y);
  addNoise(ctx, canvas.width, canvas.height);
};

export { drawCaptcha };
