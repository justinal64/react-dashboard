import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 0.875rem;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: transparent;
`;

// Extending Button with extra styles
const DangerButton = Button.extend`
  color: tomato;
  border-color: tomato;
  :hover {
    color: #fff;
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

const SecondaryButton = Button.extend`
  color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    color: #fff;
    background-color: #c0cadd;
    border-color: #c0cadd;
  }
`;

const PrimaryButton = Button.extend`
  color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8;
  }
`;

const SuccessButton = Button.extend`
  color: #79c447;
  border-color: #79c447;
  :hover {
    color: #fff;
    background-color: #79c447;
    border-color: #79c447;
  }
`;

const WarningButton = Button.extend`
  color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    color: #fff;
    background-color: #fabb3d;
    border-color: #fabb3d;
  }
`;

let buttonPicker = title => {
  if (title === "Danger") return <DangerButton>{title}</DangerButton>;
  else if (title === "Primary") return <PrimaryButton>{title}</PrimaryButton>;
  else if (title === "Secondary")
    return <SecondaryButton>{title}</SecondaryButton>;
  else if (title === "Success") return <SuccessButton>{title}</SuccessButton>;
  else if (title === "Warning") return <WarningButton>{title}</WarningButton>;
  else return <Button>{title}</Button>;
  // else if (theme === "secondary") return secondary;
  // else if (theme === "success") return success;
  // else if (theme === "warning") return warning;
  // else if (theme === "danger") return danger;
};

const InvertedButton = props => {
  return buttonPicker(props.title);
};

export default InvertedButton;
