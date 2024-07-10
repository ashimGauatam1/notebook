import React from 'react';
import './Alert.css';
const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert alert-${type}`} style={{fontWeight:'bold'}} role="alert">
      {message}
      <button type="button" className="close" aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
