import React from 'react';
import "./Components.scss"



const Button = ({ text, onClick, style, type = "button", disabled = false }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      style={style} 
      disabled={disabled}
      className="PrimaryBtn"
    >
      {text}
    </button>
  );
};

export default Button;