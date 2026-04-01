import React from "react";

const Img = ({ img, classes, ...rest }) => {
  return (
    <div>
      <img src={img} className={classes} {...rest} />
    </div>
  );
};

export default Img;
