import React from 'react';

export const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

export default Button;
