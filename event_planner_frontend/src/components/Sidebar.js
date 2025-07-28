import React from 'react';
import './Sidebar.css';

// PUBLIC_INTERFACE
function Sidebar({ menuItems, onSelect, activeItem }) {
  /**
   * Sidebar navigation for app
   * @param {Array} menuItems - List of {key, label, icon} for navigation
   * @param {Function} onSelect - Callback when a nav item is clicked
   * @param {String} activeItem - key of the currently selected item
   */
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">Event Planner</div>
      <ul className="sidebar-nav">
        {menuItems.map(item => (
          <li
            key={item.key}
            className={`sidebar-nav-item ${activeItem === item.key ? 'active' : ''}`}
            onClick={() => onSelect(item.key)}
            aria-label={item.label}
            tabIndex="0"
          >
            {item.icon && <span className="sidebar-icon">{item.icon}</span>}
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
