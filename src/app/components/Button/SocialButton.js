import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";
import { Button } from "./Styles";

const background = {
  twitter: "#00aced",
  facebook: "#3b5998",
  linkedin: "#4875b4",
  flickr: "#ff0084",
  tumblr: "#32506d",
  xing: "#026466",
  github: "#4183c4",
  html5: "#e34f26",
  openid: "#f78c40",
  stackoverflow: "#fe7a15",
  css3: "#0170ba",
  youtube: "#b00",
  dribbble: "#ea4c89",
  "google+": "#d34836",
  instagram: "#517fa4",
  pinterest: "#cb2027",
  vk: "#45668e",
  yahoo: "#400191"
};

const hover_background = {
  twitter: "#0099d4",
  facebook: "#344e86",
  linkedin: "#4169a2",
  flickr: "#e60077",
  tumblr: "#2a435c",
  xing: "#024b4d",
  github: "#3876b4",
  html5: "#d4431b",
  openid: "#f67d28",
  stackoverflow: "#f86c01",
  css3: "#0161a1",
  youtube: "#a20000",
  dribbble: "#e7357a",
  "google+": "#c43d2b",
  instagram: "#497293",
  pinterest: "#b51d23",
  vk: "#3d5a7d",
  yahoo: "#350178"
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
