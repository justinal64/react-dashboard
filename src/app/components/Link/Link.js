import React from "react";
import styled from "styled-components";

const StyledLink = styled.button`
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  color: #20a8d8;
  :hover {
    color: #167495;
    text-decoration: underline;
  }
`;

const Link = props => {
  return <StyledLink>{props.title}</StyledLink>;
};

export default Link;
