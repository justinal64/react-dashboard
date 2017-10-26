import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";
import { Button } from "./Styles";
const SocialButton = styled.button`
  color: white;
  background-color: red;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 0;
  padding: 0.5rem 0.75rem;
  padding: 0;
  transition: all 0.15s ease-in-out;
  font-size: 0.75rem;
  display: inline-block;
  padding-right: 0.25rem;
`;

const StyledSocialButton = props => {
  const { icon, title, font, inverted, disabled, block, button } = props;
  let needIcon = icon ? getIcon(icon, test) : "";
  return (
    <SocialButton>
      {needIcon}
      {title}
    </SocialButton>
  );
};

const test = {
  marginRight: ".25rem",
  width: "1.8125rem",
  textAlign: "center",
  padding: ".25rem 0",
  fontSize: ".875rem",
  lineHeight: "1.5",
  backgroundColor: "pink"
};

export default StyledSocialButton;
