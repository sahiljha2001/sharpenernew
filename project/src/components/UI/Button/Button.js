import React from 'react';

import './Button.css';

const Button = props => {
  const value=props.value>0?true:false;
  return (
    <button type={props.type} className={`button ${value?'':'empty'}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
