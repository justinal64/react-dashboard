import React from "react";
import styled from "styled-components";
import Header from "../Typography/Header/Header";

const StyledCard = styled.div`font-weight: 800;`;
const Paragraph = styled.p``;

const Card = props => {
  return (
    <StyledCard>
      <Header title={props.title} />
      <Paragraph>{props.paragraph}</Paragraph>
    </StyledCard>
  );
};

export default Card;
