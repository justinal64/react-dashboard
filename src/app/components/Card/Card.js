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

const StyledBorder = styled.div`
  border: 1px solid ${props => getTheme(props.theme)};
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
  background-color: #f9f9fa;
  border-right: 1px solid #c9ccd3;
  border-bottom: ${props =>
    props.BottomHeader ? "none" : "1px solid #c9ccd3"};
  border-left: 1px solid #c9ccd3;
`;

const Label = styled.span`float: right;`;

const Card = props => {
  const { title, label, bottomheader, theme, paragraph } = props;
  let headerTop = null;
  let headerBottom = null;
  let header = (
    <StyledHeader>
      <span>{title}</span>
      <Label>{label}</Label>
    </StyledHeader>
  );
  if (!bottomheader) headerTop = header;
  else headerBottom = header;

  return (
    <StyledBorder theme={theme}>
      {headerTop}
      <StyledCardBody bottomheader={bottomheader}>{paragraph}</StyledCardBody>
      {headerBottom}
    </StyledBorder>
  );
};

export default Card;
