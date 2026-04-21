import React, { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";

export class Form extends Component {
  renderInput(name, placeholder, classes, type = "text", value, id, style) {
    return (
      <Input
        name={name}
        placeholder={placeholder}
        inputClasses={classes}
        type={type}
        style={style}
        value={value}
        id={id}
      />
    );
  }
  renderTextArea(name, placeholder, classes, extraProps = {}) {
    return (
      <TextArea
        name={name}
        placeholder={placeholder}
        textClasses={classes}
        {...extraProps}
      />
    );
  }
  renderButton(name, type, classes, style, extraProps = {}) {
    return (
      <Button
        name={name}
        type={type}
        classes={classes}
        label={name}
        style={style}
        {...extraProps}
      />
    );
  }
}

export default Form;
