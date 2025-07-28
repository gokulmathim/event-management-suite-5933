import React from 'react';
import './TopBar.css';

// PUBLIC_INTERFACE
function TopBar({ title, onProfile, onLogout, user }) {
  /**
   * TopBar for the main layout.
   * @param {string} title - Title of the current section
   * @param {function} onProfile - Called when user profile icon clicked
   * @param {function} onLogout - Called when logout clicked
   * @param {object} user - current user info
   */
  return (
    <header className="topbar">
      <div className="topbar-title">{title}</div>
      <div className="topbar-actions">
        {user ? (
          <>
            <button className="topbar-btn" onClick={onProfile} title="Profile">
              <span role="img" aria-label="User">👤</span> {user.name}
            </button>
            <button className="topbar-btn" onClick={onLogout} title="Logout">
              <span role="img" aria-label="Logout">⏻</span>
            </button>
          </>
        ) : (
          <span className="topbar-btn">Not signed in</span>
        )}
      </div>
    </header>
  );
}
export default TopBar;
