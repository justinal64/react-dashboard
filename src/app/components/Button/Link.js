import React from "react";
import styled from "styled-components";

const Link = styled.button`
  font-size: ${props => (props.font ? props.font : ".75")}rem;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: #20a8d8;
  display: ${props => (props.display ? displayBlock : "inline-block")};
  ${props => (props.disabled ? disabledButton : "")};
  :hover {
    color: #167495;
    text-decoration: underline;
  }
`;

const displayBlock = `
display: block; 
width: 100%; 
`;

const disabledButton = `
opacity: .65; 
pointer-events: none; 
`;

const StyledLink = props => {
  return (
    <Link font={props.font} display={props.block} disabled={props.disabled}>
      {props.title}
    </Link>
  );
};

export default StyledLink;
