import "./App.css";
import { CaptchaGenerator } from "./components/CaptchaGenerator";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">Insaniyat</div>
        <button className="header-toggle-theme-btn btn-icon">
          <i class="fa-regular fa-sun"></i>
          {/* <i class="fa-regular fa-moon"></i> */}
        </button>
      </header>
      <main className="main">
        <h1>Main</h1>
      </main>
    </div>
  );
}

export default App;
