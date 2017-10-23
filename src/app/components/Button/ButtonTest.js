import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: transparent;
`;

// We're extending Button with some extra styles
const TomatoButton = Button.extend`
  color: tomato;
  border-color: tomato;
  :hover {
    color: #fff;
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

let buttonPicker = props => {
  if (props.button === "danger")
    return <TomatoButton>{props.title}</TomatoButton>;
  else return <Button>{props.title}</Button>;
  // else if (theme === "secondary") return secondary;
  // else if (theme === "success") return success;
  // else if (theme === "warning") return warning;
  // else if (theme === "danger") return danger;
};

const ButtonTest = props => {
  return buttonPicker(props);
};

export default ButtonTest;
