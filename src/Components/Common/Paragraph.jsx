import React from "react";

const Paragraph = ({ label, classes, ...rest }) => {
  return (
    <div>
      <p className={classes} {...rest}>
        {label}
      </p>
    </div>
  );
};

export default Paragraph;
