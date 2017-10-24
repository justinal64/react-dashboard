import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 0.75rem;
  font-size: ${props => (props.font ? props.font : ".75")}rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
  background-color: transparent;
`;

const PrimaryButton = Button.extend`
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    background-color: #1b8eb7;
    border-color: #1985ac;
  }
`;

const InvertedPrimaryButton = Button.extend`
  color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    color: #fff;
    background-color: #20a8d8;
    border-color: #20a8d8;
  }
`;

const SecondaryButton = Button.extend`
  color: #111;
  background-color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    background-color: #a7b5d0;
    border-color: #9faecb;
  }
`;

const InvertedSecondaryButton = Button.extend`
  color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    color: #fff;
    background-color: #c0cadd;
    border-color: #c0cadd;
  }
`;

const SuccessButton = Button.extend`
  color: #111;
  background-color: #79c447;
  border-color: #79c447;
  :hover {
    background-color: #67ad38;
    border-color: #61a434;
  }
`;

const InvertedSuccessButton = Button.extend`
  color: #79c447;
  border-color: #79c447;
  :hover {
    color: #fff;
    background-color: #79c447;
    border-color: #79c447;
  }
`;

const WarningButton = Button.extend`
  color: #111;
  background-color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    background-color: #f9ae18;
    border-color: #f9aa0b;
  }
`;

const InvertedWarningButton = Button.extend`
  color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    color: #fff;
    background-color: #fabb3d;
    border-color: #fabb3d;
  }
`;

const DangerButton = Button.extend`
  color: #fff;
  background-color: #ff5454;
  border-color: #ff5454;
  :hover {
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

const InvertedDangerButton = Button.extend`
  color: tomato;
  border-color: tomato;
  :hover {
    color: #fff;
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

let invertedButtonPicker = (title, icon) => {
  if (title === "Primary")
    return (
      <InvertedPrimaryButton>
        {icon}
        {title}
      </InvertedPrimaryButton>
    );
  else if (title === "Secondary")
    return (
      <InvertedSecondaryButton>
        {icon}
        {title}
      </InvertedSecondaryButton>
    );
  else if (title === "Success")
    return (
      <InvertedSuccessButton>
        {icon}
        {title}
      </InvertedSuccessButton>
    );
  else if (title === "Warning")
    return (
      <InvertedWarningButton>
        {icon}
        {title}
      </InvertedWarningButton>
    );
  else if (title === "Danger")
    return (
      <InvertedDangerButton>
        {icon}
        {title}
      </InvertedDangerButton>
    );
  else return <Button>{title}</Button>;
};

let buttonPicker = (title, icon, font) => {
  if (title === "Primary")
    return (
      <PrimaryButton font={font}>
        {icon}
        {title}
      </PrimaryButton>
    );
  else if (title === "Secondary")
    return (
      <SecondaryButton>
        {icon}
        {title}
      </SecondaryButton>
    );
  else if (title === "Success")
    return (
      <SuccessButton>
        {icon}
        {title}
      </SuccessButton>
    );
  else if (title === "Warning")
    return (
      <WarningButton>
        {icon}
        {title}
      </WarningButton>
    );
  else if (title === "Danger")
    return (
      <DangerButton>
        {icon}
        {title}
      </DangerButton>
    );
  else return <Button>{title}</Button>;
};

const StyledButton = props => {
  let needIcon = props.icon ? getIcon(props.icon) : "";
  if (props.inverted)
    return invertedButtonPicker(props.title, needIcon, props.font);
  else return buttonPicker(props.title, needIcon, props.font);
};

export default StyledButton;
