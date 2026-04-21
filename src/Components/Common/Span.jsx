import React from "react";

const Span = ({ label, classes, ...rest }) => {
  return (
    <div>
      <span className={classes} {...rest}>
        {label}
      </span>
    </div>
  );
};

export default Span;
