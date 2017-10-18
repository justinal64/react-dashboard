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

const StyledButton = styled.button`
  ${getBackgroundColor};
  ${getColor};
  ${getFontSize};
  ${getLineHeight};
  ${getBorderColor};
  :hover {
    ${getHoverBackgroundColor};
    ${getHoverBorderColor};
  }
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
    hoverBC
  } = props;

  let needIcon = icon ? getIcon(icon, navColorScheme) : "";
  return (
    <StyledButton
      hoverBGC={hoverBGC}
      hoverBC="#1985ac"
      backgroundColor={backgroundColor}
      color={color}
      font={font}
      lineHeight={lineHeight}
      borderColor={borderColor}
    >
      {needIcon} {title}
    </StyledButton>
  );
};
let navColorScheme = {
  color: "white"
};

export default Button;
