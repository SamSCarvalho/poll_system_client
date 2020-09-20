import React from "react";

import { SuccessButton, DangerButton } from "./styles";

const Button = (props) => {
  switch (props.type) {
    case 'success':
      return (
        <SuccessButton
          onClick={props.func}
          centered={props.centered}
          disabled={props.disabled}
        >
          {props.title}
        </SuccessButton>
      )
    case 'danger':
      return (
        <DangerButton
          onClick={props.func}
          centered={props.centered}
          disabled={props.disabled}
        >
          {props.title}
        </DangerButton>
      )
    default:
      return (
        <SuccessButton
          onClick={props.func}
          centered={props.centered}
          disabled={props.disabled}
        >
          {props.title}
        </SuccessButton>
      )
  }

};

export default Button;
