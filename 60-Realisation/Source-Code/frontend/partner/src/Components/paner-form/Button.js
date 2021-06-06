import React from "react";
import "../../style/paner-form/Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline','btn--secondary']
const SIZES = ['btn--medium', 'btn--large']
export const ButtonLogIn = ({
  children,
  type,
  onClick,
  buttonStype,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStype)
    ? buttonStype
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
export const Button = ({
  children,
  type,
  onClick,
  buttonStype,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStype)
    ? buttonStype
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/register" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
    
  );
};
