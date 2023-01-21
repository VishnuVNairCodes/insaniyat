import "./Captcha.css";

const Captcha = ({ canvasRef }) => {
  return (
    <canvas
      ref={canvasRef}
      width="300"
      height="70"
      className="captcha-canvas"
    ></canvas>
  );
};

export { Captcha };
