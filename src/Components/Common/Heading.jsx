import React from "react";

const Heading = ({ label, classes, ...rest }) => {
  return (
    <div>
      <h1 className={classes} {...rest}>
        {label}
      </h1>
    </div>
  );
};

export default Heading;
