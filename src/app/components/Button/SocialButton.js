import React from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";

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
  yahoo: "#400191",
  behance: "#1769ff",
  dropbox: "#007ee5",
  reddit: "#ff4500",
  spotify: "#7ab800",
  vine: "#00bf8f",
  forsquare: "#1073af",
  vimeo: "#aad450"
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
  yahoo: "#350178",
  behance: "#0059fd",
  dropbox: "#0070cc",
  reddit: "#e63e00",
  spotify: "#699f00",
  vine: "#00a67c",
  forsquare: "#0e6498",
  vimeo: "#a0cf3c"
};

const SocialButton = styled.button`
  color: white;
  padding: 0;
  font-size: ${props => (props.size === "large" ? "1.25rem" : ".875rem")};
  line-height: 1.5;
  border: 0;
  padding-right: ${props =>
    props.size ? getPaddingRight(props.size) : "0rem"};
  background: ${props =>
    background[props.social] ? background[props.social] : "grey"};
  :hover {
    background: ${props =>
      hover_background[props.social] ? hover_background[props.social] : "grey"};
  }
`;

const small = {
  width: "1.8125rem",
  padding: ".25rem 0rem",
  lineHeight: "1.5"
};

const medium = {
  // width: "1.8125rem",
  padding: ".5rem .75rem",
  lineHeight: "1.5",
  marginRight: ".25rem"
};

const large = {
  width: "1.8125rem",
  padding: ".25rem 0",
  lineHeight: "1.5",
  marginRight: ".25rem"
};

const getPaddingRight = size => {
  console.log(size);
  if (size === "small") return ".25rem";
  else if (size === "large") return ".75rem";
  else if (size === "medium") return ".5rem";
  else return "0rem";
};

const getSize = size => {
  if (size === "small") return small;
  else if (size === "medium") return medium;
  else if (size === "large") return large;
  else return medium;
};

const StyledSocialButton = props => {
  const { icon, title, font, size, social } = props;
  let textSize = getSize(size);
  let needIcon = icon ? getIcon(icon, textSize) : "";

  return (
    <SocialButton social={social} size={size}>
      {needIcon}
      {title}
    </SocialButton>
  );
};

export default StyledSocialButton;
