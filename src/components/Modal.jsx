import React from 'react';

const Modal = ({ show, onClose, onSubmit, title, buttonText }) => {
  if (!show) return null;

  return (
    <div style={modalBackdropStyle}>
      <div style={modalStyle}>
        <h2>{title}</h2>
        <input type="email" placeholder="Enter your email" id="modal-email-input" style={inputStyle} />
        <button onClick={() => {
          const email = document.getElementById('modal-email-input').value;
          if (email) onSubmit(email);
        }} style={buttonStyle}>{buttonText}</button>
        <button onClick={onClose} style={closeButtonStyle}>Close</button>
      </div>
    </div>
  );
};

const modalBackdropStyle = {
  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};

const modalStyle = {
  background: '#fff', padding: '20px', borderRadius: '8px', textAlign: 'center', width: '300px'
};

const inputStyle = {
  width: '100%', padding: '10px', margin: '10px 0'
};

const buttonStyle = {
  background: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer'
};

const closeButtonStyle = {
  background: 'gray', color: '#fff', padding: '10px 20px', marginTop: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer'
};

export default Modal;
