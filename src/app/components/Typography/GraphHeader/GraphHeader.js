import React from "react";
import styled from "styled-components";
import { GraphHeader as StyledGraphHeader, GraphWrapper } from "./Styles";
const GraphHeader = props => {
  return (
    <GraphWrapper alignment={props.alignment}>
      <StyledGraphHeader font={props.font} color={props.color}>
        {props.title}
      </StyledGraphHeader>
    </GraphWrapper>
  );
};

export default GraphHeader;
