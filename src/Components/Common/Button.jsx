import React from "react";

const Button = ({ label, classes, icon, style, ...rest }) => {
  return (
    <div>
      <button className={classes} style={style} {...rest}>
        {label} {icon && icon}
      </button>
    </div>
  );
};

export default Button;
