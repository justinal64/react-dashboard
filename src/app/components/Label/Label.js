import React from "react";
import styled from "styled-components";

const CenterText = styled.div`text-align: center;`;

const StyledLabel = styled.label`
  color: white;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background: ${props => (props.color ? props.color : "transparent")};
  border-radius: ${props => (props.round ? "2rem" : "0rem")};
`;

const Label = props => {
  return (
    <CenterText>
      <StyledLabel round={props.round} color={props.color}>
        {props.title}
      </StyledLabel>
    </CenterText>
  );
};

export default Label;
