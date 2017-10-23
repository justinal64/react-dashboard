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

const primary = `
  color: #fff;
  background-color: #20a8d8;
  border-color: #20a8d8;
  :hover {
    background-color: #1b8eb7;
    border-color: #1985ac;
  }
`;

const secondary = `
  color: #111;
  background-color: #c0cadd;
  border-color: #c0cadd;
  :hover {
    background-color: #a7b5d0;
    border-color: #9faecb;
  }
`;

const success = `
  color: #111;
  background-color: #79c447;
  border-color: #79c447;
  :hover {
    background-color: #67ad38;
    border-color: #61a434;
  }
`;

const warning = `
  color: #111;
  background-color: #fabb3d;
  border-color: #fabb3d;
  :hover {
    background-color: #f9ae18;
    border-color: #f9aa0b;
  }
`;

const danger = `
  color: #fff;
  background-color: #ff5454;
  border-color: #ff5454;
  :hover {
    background-color: #ff2e2e;
    border-color: #ff2121;
  }
`;

let themePicker = theme => {
  if (theme === "primary") return primary;
  else if (theme === "secondary") return secondary;
  else if (theme === "success") return success;
  else if (theme === "warning") return warning;
  else if (theme === "danger") return danger;
};

const StyledButton = styled.button`
  /* ${props => (props.primary ? primary : "background: pink;")}; */
  ${props => themePicker(props.theme)};
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: .5rem .75rem;
  font-size: .875rem;
  line-height: 1.25;
  transition: all .15s ease-in-out;
  margin: .15em;
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
