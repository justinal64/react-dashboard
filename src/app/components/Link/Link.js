import React from "react";
import styled from "styled-components";

const StyledLink = styled.button`
  font-size: ${props => (props.font ? props.font : ".75")}rem;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: #20a8d8;
  :hover {
    color: #167495;
    text-decoration: underline;
  }
  display: ${props => (props.display ? displayBlock : "inline-block")};
  ${props => (props.disabled ? disabledButton : "")};
`;

const displayBlock = `
  display: block; 
  width: 100%; 
`;

const disabledButton = `
  opacity: .65; 
  pointer-events: none; 
`;

const Link = props => {
  return (
    <StyledLink
      font={props.font}
      display={props.block}
      disabled={props.disabled}
    >
      {props.title}
    </StyledLink>
  );
};

export default Link;
