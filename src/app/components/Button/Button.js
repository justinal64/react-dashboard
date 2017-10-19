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
  background-color: #c0cadd;
  border-color: #c0cadd;
`;

const success = `
  background-color: #79c447;
  border-color: #79c447;
`;

const warning = `
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
  /* ${props => (props.primary ? primary : "background: pink;")}; */
  color: #111;
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

const Button = props => {
  // This is an example of Destructuring
  const {
    backgroundColor,
    color,
    font,
    lineHeight,
    borderColor,
    title,
    icon,
    hoverBGC,
    hoverBC,
    theme
  } = props;

  let needIcon = icon ? getIcon(icon, navColorScheme) : "";
  return (
    // <StyledButton
    //   hoverBGC={hoverBGC}
    //   hoverBC="#1985ac"
    //   backgroundColor={backgroundColor}
    //   color={color}
    //   font={font}
    //   lineHeight={lineHeight}
    //   borderColor={borderColor}
    // >
    //   {needIcon} {title}
    // </StyledButton>
    <StyledButton theme={theme}>
      {needIcon}
      {title}
    </StyledButton>
  );
};
let navColorScheme = {
  color: "white"
};

export default Button;
