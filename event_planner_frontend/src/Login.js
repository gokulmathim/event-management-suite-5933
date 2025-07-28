import React, { useState } from "react";
import { apiPost } from "./api";
import Modal from "./components/Modal";

// PUBLIC_INTERFACE
function Login({ onAuth }) {
  /**
   * Handles login and registration flow.
   * @param {function} onAuth - called with user info when login/register successful
   */
  const [showRegister, setShowRegister] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  // PUBLIC_INTERFACE
  async function handleLogin(e) {
    e.preventDefault();
    setPending(true); setError("");
    const email = e.target.email.value, password = e.target.password.value;
    try {
      // Replace with real API endpoint
      const resp = await apiPost("/auth/login/", { email, password });
      onAuth(resp.user);
    } catch (err) {
      setError("Login failed.");
    } finally { setPending(false); }
  }

  // PUBLIC_INTERFACE
  async function handleRegister(e) {
    e.preventDefault();
    setPending(true); setError("");
    const email = e.target.reg_email.value,
          password = e.target.reg_password.value,
          name = e.target.reg_name.value;
    try {
      // Replace with real API endpoint
      const resp = await apiPost("/auth/register/", { email, password, name });
      onAuth(resp.user);
    } catch (err) {
      setError("Registration failed.");
    } finally { setPending(false); }
  }

  return (
    <div className="login-shell">
      <div className="login-card">
        <h1 className="login-title">Event Planner</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input type="email" placeholder="Email" name="email" required autoFocus />
          <input type="password" placeholder="Password" name="password" required />
          <button type="submit" disabled={pending}>Sign In</button>
        </form>
        <div style={{marginTop:20, textAlign:"center"}}>
          <button className="link-btn"
            onClick={() => setShowRegister(true)}
            type="button"
            disabled={pending}
          >New? Create account</button>
        </div>
        {error && <div className="login-error">{error}</div>}
      </div>
      <Modal show={showRegister} title="Register" onClose={() => setShowRegister(false)}>
        <form onSubmit={handleRegister} className="login-form">
          <input type="text" name="reg_name" placeholder="Your name" autoFocus required />
          <input type="email" name="reg_email" placeholder="Email" required />
          <input type="password" name="reg_password" placeholder="Password" required />
          <button type="submit" disabled={pending}>Register</button>
        </form>
        {error && <div className="login-error">{error}</div>}
      </Modal>
    </div>
  );
}
export default Login;
