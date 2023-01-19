import "./App.css";
import { Signup } from "./components/SignUp";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">Insaniyat</div>
        <button className="header-toggle-theme-btn btn-icon">
          <i className="fa-regular fa-sun"></i>
          {/* <i className="fa-regular fa-moon"></i> */}
        </button>
      </header>
      <main className="main">
        <Signup />
      </main>
    </div>
  );
}

export default App;
