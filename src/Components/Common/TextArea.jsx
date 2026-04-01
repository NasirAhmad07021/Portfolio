import React from "react";

const TextArea = ({ name, placeholder, textClasses }) => {
  return (
    <div>
      <textarea name={name} placeholder={placeholder} className={textClasses} />
    </div>
  );
};

export default TextArea;
