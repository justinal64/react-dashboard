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
  padding-right: 0.25rem;
  ${props => backgroundColor(props.social)};
`;

const backgroundColor = social => {
  console.log(social);
  if (social === "facebook") return facebook;
  else if (social === "twitter") return twitter;
};

const small = {
  width: "1.8125rem",
  padding: ".25rem 0",
  fontSize: ".875rem",
  lineHeight: "1.5",
  marginRight: ".25rem"
};

const facebook = `
    background: #3b5998;
    :hover {
      background: #344e86;
    }
  `;

const twitter = `
  background: #00aced;
  :hover {
    background: #0099d4;
  }
`;

const StyledSocialButton = props => {
  const { icon, title, font, social } = props;
  let needIcon = icon ? getIcon(icon, small) : "";
  // Work on a function to get the bg and icon_bg
  // let bg =  getIcon(icon, small) ? "grey";

  return (
    <SocialButton social={social}>
      {needIcon}
      {title}
    </SocialButton>
  );
};

export default StyledSocialButton;
