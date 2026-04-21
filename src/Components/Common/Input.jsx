import React from "react";

const Input = ({ name, type, placeholder, inputClasses, style, ...rest }) => {
  return (
    <input
      name={name}
      id={type}
      type={type}
      placeholder={placeholder}
      className={inputClasses}
      style={style}
      {...rest}
    />
  );
};

export default Input;
