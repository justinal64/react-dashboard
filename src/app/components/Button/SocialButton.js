import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";
import { Button } from "./Styles";

const background = {
  twitter: "#00aced",
  facebook: "#3b5998"
};

const hover_background = {
  twitter: "#0099d4",
  facebook: "#344e86"
};

const SocialButton = styled.button`
  color: white;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  border: 0;
  padding-right: 0.25rem;
  background: ${props =>
    background[props.social] ? background[props.social] : "grey"};
  :hover {
    background: ${props =>
      hover_background[props.social] ? hover_background[props.social] : "grey"};
  }
`;

const small = {
  width: "1.8125rem",
  padding: ".25rem 0",
  fontSize: ".875rem",
  lineHeight: "1.5",
  marginRight: ".25rem"
};

const StyledSocialButton = props => {
  const { icon, title, font } = props;
  let social = title.toLowerCase();
  let needIcon = icon ? getIcon(icon, small) : "";

  return (
    <SocialButton social={social}>
      {needIcon}
      {title}
    </SocialButton>
  );
};

export default StyledSocialButton;
