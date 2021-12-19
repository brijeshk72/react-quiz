import React from "react";

const Button = (props) => {
  const { disabled, onClick, onClickProps, label } = props;
  return (
    <button
      onClick={() => onClick(onClickProps)}
      className={`btn cursorPlointer`}
      type="button"
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
