import React from "react";
import "./Modal.css";

// PUBLIC_INTERFACE
function Modal({ show, title, onClose, children }) {
  /**
   * Accessible modal dialog.
   * @param {bool} show - if true, modal is visible
   * @param {string} title - modal heading
   * @param {function} onClose - function to close
   * @param {any} children - modal body
   */
  if (!show) return null;
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content">
        <div className="modal-header">
          <h3 id="modal-title">{title}</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
