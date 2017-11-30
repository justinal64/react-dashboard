import React from "react";
import styled from "styled-components";
import { colors } from "../Styles/Styles";

const getTheme = color => {
  if (color && color.length !== undefined) return colors[color];
  return "transparent";
};

const borderTheme = (theme, accent) => {
  if (accent) return `border-top: 2px solid ${getTheme(theme)}`;
  else if (theme && theme.length !== undefined)
    return `border: 1px solid ${getTheme(theme)}`;
  else return "border: 1px solid transparent";
};

const headerTop = (bottomheader, title, label, background) => {
  if (!bottomheader && (title !== undefined || label !== undefined)) {
    return (
      <StyledHeader background={background}>
        <span>{title}</span>
        <StyledLabel>{label}</StyledLabel>
      </StyledHeader>
    );
  }
};

const headerBottom = (bottomheader, title, label, background) => {
  if (bottomheader && (title !== undefined || label !== undefined)) {
    return (
      <StyledHeader background={background}>
        <span>{title}</span>
        <StyledLabel>{label}</StyledLabel>
      </StyledHeader>
    );
  }
};

const StyledBorder = styled.div`
  ${props => borderTheme(props.theme, props.accent)};
  margin-bottom: 1rem;
`;

const StyledHeader = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  border: 1px solid #c9ccd3;
  background-color: ${props =>
    props.background ? getTheme(props.background) : "#e7e7eb"};
  color: ${props => (props.background ? "white" : "black")};
`;

const StyledCardBody = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: ${props =>
    props.background ? getTheme(props.background) : "#f9f9fa"};
  border: 1px solid #c9ccd3;
  color: ${props => (props.background ? "white" : "black")};
`;

const StyledLabel = styled.span`
  float: right;
`;

const Card = props => {
  const {
    title,
    label,
    bottomheader,
    theme,
    paragraph,
    accent,
    background
  } = props;

  return (
    <StyledBorder theme={theme} accent={accent}>
      {headerTop(bottomheader, title, label, background)}
      <StyledCardBody bottomheader={bottomheader} background={background}>
        {paragraph}
      </StyledCardBody>
      {headerBottom(bottomheader, title, label, background)}
    </StyledBorder>
  );
};

export default Card;
