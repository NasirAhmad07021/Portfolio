import React from "react";

const Anchor = ({ label, classes, ...rest }) => {
  return (
    <div>
      <a className={classes} {...rest}>
        {label}
      </a>
    </div>
  );
};

export default Anchor;
