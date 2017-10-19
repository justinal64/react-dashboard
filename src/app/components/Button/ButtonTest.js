import React from "react";
import styled from "styled-components";
import {
  getBackgroundColor,
  getColor,
  getFontSize,
  getLineHeight,
  getBorderColor,
  getHoverBackgroundColor,
  getHoverBorderColor
} from "../Styles/Styles";

import { getIcon } from "../Helper/Helper";

// const StyledButton = styled.button`
//   ${getBackgroundColor};
//   ${getColor};
//   ${getFontSize};
//   ${getLineHeight};
//   ${getBorderColor};
//   :hover {
//     ${getHoverBackgroundColor};
//     ${getHoverBorderColor};
//   }
// `;

const primary = `
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
`;

const secondary = `
  color: #111;
  background-color: #c0cadd;
  border-color: #c0cadd;
`;

const success = `
  color: #111;
  background-color: #79c447;
  border-color: #79c447;
`;

const warning = `
  color: #111;
  background-color: #fabb3d;
  border-color: #fabb3d;
`;

const danger = `
  color: #fff;
  background-color: #ff5454;
  border-color: #ff5454;
`;

let themePicker = theme => {
  console.log(theme);
  if (theme === "primary") return primary;
  else if (theme === "secondary") return secondary;
  else if (theme === "success") return success;
  else if (theme === "warning") return warning;
  else if (theme === "danger") return danger;
};

const StyledButton = styled.button`
  ${props => themePicker(props.theme)};
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
`;

const ButtonTest = props => {
  // This is an example of Destructuring
  const { title, icon, theme } = props;

  let needIcon = icon ? getIcon(icon, navColorScheme) : "";
  return (
    <StyledButton theme={theme}>
      {needIcon}
      {title}
    </StyledButton>
  );
};
let navColorScheme = {
  color: "white"
};

export default ButtonTest;
