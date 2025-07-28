import React, { useState, useEffect } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import Login from "./Login";
import "./Login.css";

/**
 * Main App component
 * Handles auth and layout switching.
 */
// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState(null);

  // PUBLIC_INTERFACE
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((pr) => (pr === "light" ? "dark" : "light"));

  // PUBLIC_INTERFACE
  function handleLogin(userObj) {
    setUser(userObj);
  }

  // PUBLIC_INTERFACE
  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <Login onAuth={handleLogin} />
      )}
    </div>
  );
}

export default App;
