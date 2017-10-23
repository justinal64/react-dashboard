import React from "react";
import styled from "styled-components";
// import {
//   getBackgroundColor,
//   getColor,
//   getFontSize,
//   getLineHeight,
//   getBorderColor,
//   getHoverBackgroundColor,
//   getHoverBorderColor
// } from "../Styles/Styles";

// const primary = `
//   color: #fff;
//   background-color: #20a8d8;
//   border-color: #20a8d8;
// `;

// const secondary = `
//   color: #111;
//   background-color: #c0cadd;
//   border-color: #c0cadd;
// `;

// const success = `
//   color: #111;
//   background-color: #79c447;
//   border-color: #79c447;
// `;

// const warning = `
//   color: #111;
//   background-color: #fabb3d;
//   border-color: #fabb3d;
// `;

// const danger = `
//   color: #fff;
//   background-color: #ff5454;
//   border-color: #ff5454;
// `;

let themePicker = theme => {
  console.log(theme);
  // if (theme === "primary") return primary;
  // else if (theme === "secondary") return secondary;
  // else if (theme === "success") return success;
  // else if (theme === "warning") return warning;
  // else if (theme === "danger") return danger;
};

const StyledLink = styled.button`
  /* ${props => (props.primary ? primary : "background: pink;")}; */
  ${props => themePicker(props.theme)};
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: #20a8d8;
`;

const Link = props => {
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

  return <StyledLink>Link</StyledLink>;
};

export default Link;
