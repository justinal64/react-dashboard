import React from "react";
import styled from "styled-components";
import { getFontSize, getColor } from "../../Styles/Styles";

// Convert this into a styled component
const Title = styled.span`${getFontSize};`;

const addTitle = (title, font) => {
  if (title) return <Title font={font}>{title}</Title>;
};

const addSubTitle = (subtitle, font) => {
  if (subtitle) return <Title font={font / 2}>{subtitle}</Title>;
};

const Header = props => {
  const { title, subtitle, font } = props;

  return (
    <div>
      {addTitle(title, font)}
      {addSubTitle(subtitle, font)}
    </div>
  );
};

export default Header;
