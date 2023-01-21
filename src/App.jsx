import { Signup } from "./components/SignUp";
import { useTheme } from "./contexts/theme-context";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <div className="header-brand">Insaniyat</div>
        <button
          onClick={toggleTheme}
          className="header-toggle-theme-btn btn-icon"
        >
          {theme === "light" ? (
            <i className="fa-regular fa-sun"></i>
          ) : (
            <i className="fa-regular fa-moon"></i>
          )}
        </button>
      </header>
      <main className="main">
        <Signup />
      </main>
    </div>
  );
}

export default App;
