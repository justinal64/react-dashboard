import React from "react";
import styled from "styled-components";
import { displayBlock, disabledButton } from "./Styles";

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

const StyledLink = props => {
  return (
    <Link font={props.font} display={props.block} disabled={props.disabled}>
      {props.title}
    </Link>
  );
};

export default StyledLink;
