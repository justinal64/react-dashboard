import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";
import { Button } from "./Styles";
const SocialButton = styled.button`
  color: white;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  border: 0;
  background: fb.bg;
  padding-right: 0.25rem;
`;

const small = {
  background: "#344e86",
  width: "1.8125rem",
  padding: ".25rem 0",
  fontSize: ".875rem",
  lineHeight: "1.5",
  marginRight: ".25rem"
};

const fb = {
  bg: "#3b5998",
  icon_bg: "#344e86"
};

const StyledSocialButton = props => {
  const { icon, title, font, inverted, disabled, block, button } = props;
  let needIcon = icon ? getIcon(icon, small) : "";
  // Work on a function to get the bg and icon_bg
  // let bg =  getIcon(icon, small) ? "grey";

  return (
    <SocialButton>
      {needIcon}
      {title}
    </SocialButton>
  );
};

export default StyledSocialButton;
