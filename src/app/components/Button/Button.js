import React from "react";
import styled from "styled-components";
import { getBackgroundColor, getColor } from "../Styles/Styles";

const StyledButton = styled.button`
  ${getBackgroundColor};
  ${getColor};
  line-height: 2em;
`;

const Button = props => {
  const { backgroundColor, color } = props;
  return (
    <StyledButton backgroundColor={backgroundColor} color={color}>
      Test
    </StyledButton>
  );
};

export default Button;
