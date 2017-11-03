import React from "react";
import styled from "styled-components";
import Header from "../Typography/Header/Header";

const colors = {
  primary: "#20a8d8",
  secondary: "#c0cadd",
  success: "#79c447",
  info: "#67c2ef",
  warning: "#fabb3d",
  danger: "#ff5454"
};

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

const headerTop = (bottomheader, title, label) => {
  if (!bottomheader && (title !== undefined || label !== undefined)) {
    return (
      <StyledHeader>
        <span>{title}</span>
        <StyledLabel>{label}</StyledLabel>
      </StyledHeader>
    );
  }
};

const headerBottom = (bottomheader, title, label) => {
  if (bottomheader && (title !== undefined || label !== undefined)) {
    return (
      <StyledHeader>
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
  background-color: #e7e7eb;
  border: 1px solid #c9ccd3;
`;

const StyledCardBody = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: ${props =>
    props.background ? getTheme(props.background) : "#f9f9fa"};
  border: 1px solid #c9ccd3;
  color: ${props => (props.background ? "white" : "black")};
`;

const StyledLabel = styled.span`float: right;`;

const Card = props => {
  const { title, label, bottomheader, theme, paragraph, accent, bg } = props;

  return (
    <StyledBorder theme={theme} accent={accent}>
      {headerTop(bottomheader, title, label)}
      <StyledCardBody bottomheader={bottomheader} background={bg}>
        {paragraph}
      </StyledCardBody>
      {headerBottom(bottomheader, title, label)}
    </StyledBorder>
  );
};

export default Card;
