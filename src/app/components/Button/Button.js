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
  font-size: 0.875rem;
  line-height: 1.25;
  transition: all 0.15s ease-in-out;
  margin: 0.15em;
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

const SecondaryButton = Button.extend`
  color: #111;
  background-color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    background-color: #a7b5d0;
    border-color: #9faecb;
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

const WarningButton = Button.extend`
  color: #111;
  background-color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    background-color: #f9ae18;
    border-color: #f9aa0b;
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

let buttonPicker = (title, icon) => {
  if (title === "Primary")
    return (
      <PrimaryButton>
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

  return buttonPicker(props.title, needIcon);
};

export default StyledButton;
