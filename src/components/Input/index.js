import React from "react";

import { Container, InputStyle, TextAreaStyle, Label } from "./styles";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <InputStyle
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextAreaStyle
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <InputStyle
          name={props.name}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
  }

  return (
    <Container>
      <Label>{props.label}</Label>
      {inputElement}
    </Container>
  );
};

export default Input;
