import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";

// Add certain properties if the user passes disabled...
const themePicker = (inverted, title) => {
  if (inverted) return invertedButtonPicker(title);
  else return buttonPicker(title);
};

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
  font-size: ${props => (props.font ? props.font : ".75")}rem;
  background-color: transparent;
  ${props => themePicker(props.inverted, props.title)};
  ${props => (props.disabled ? disabledButton : "")};
`;

const disabledButton = `
  opacity: .65; 
  pointer-events: none; 
`;

const PrimaryButton = `
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    background-color: #1b8eb7;
    border-color: #1985ac;
  }
`;

const InvertedPrimaryButton = `
  color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8;
  }
`;

const SecondaryButton = `
  color: #111;
  background-color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    background-color: #a7b5d0;
    border-color: #9faecb;
  }
`;

const InvertedSecondaryButton = `
  color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    color: #fff;
    background-color: #c0cadd;
    border-color: #c0cadd;
  }
`;

const SuccessButton = `
  color: #111;
  background-color: #79c447;
  border-color: #79c447;
  :hover {
    background-color: #67ad38;
    border-color: #61a434;
  }
`;

const InvertedSuccessButton = `
  color: #79c447;
  border-color: #79c447;
  :hover {
    color: #fff;
    background-color: #79c447;
    border-color: #79c447;
  }
`;

const WarningButton = `
  color: #111;
  background-color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    background-color: #f9ae18;
    border-color: #f9aa0b;
  }
`;

const InvertedWarningButton = `
  color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    color: #fff;
    background-color: #fabb3d;
    border-color: #fabb3d;
  }
`;

const DangerButton = `
  color: #fff;
  background-color: #ff5454;
  border-color: #ff5454;
  :hover {
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

const InvertedDangerButton = `
  color: tomato;
  border-color: tomato;
  :hover {
    color: #fff;
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

let invertedButtonPicker = (title, icon, font) => {
  if (title === "Primary") return InvertedPrimaryButton;
  else if (title === "Secondary") return InvertedSecondaryButton;
  else if (title === "Success") return InvertedSuccessButton;
  else if (title === "Warning") return InvertedWarningButton;
  else if (title === "Danger") return InvertedDangerButton;
};

let buttonPicker = (title, icon, font) => {
  if (title === "Primary") return PrimaryButton;
  else if (title === "Secondary") return SecondaryButton;
  else if (title === "Success") return SuccessButton;
  else if (title === "Warning") return WarningButton;
  else if (title === "Danger") return DangerButton;
};

const StyledButton = props => {
  const { icon, title, font, inverted, disabled } = props;
  let needIcon = icon ? getIcon(icon) : "";
  return (
    <Button title={title} font={font} inverted={inverted} disabled={disabled}>
      {needIcon}
      {title}
    </Button>
  );
  // if (props.inverted)
  //   return invertedButtonPicker(props.title, needIcon, props.font);
  // else return buttonPicker(props.title, needIcon, props.font);
};

export default StyledButton;
