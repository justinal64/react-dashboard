import React from "react";
import styled from "styled-components";

const GraphHeader = props => {
  const getAlignment = props =>
    props.alignment ? `align-items: ${props.alignment};` : "";

  const getFont = props => (props.font ? `font-size: ${props.font}px;` : "");

  const GraphWrapper = styled.div`${getAlignment};`;

  const GraphHeader = styled.span`${getFont};`;

  return (
    <GraphWrapper alignment={props.alignment}>
      <GraphHeader font={props.font}>{props.title}</GraphHeader>
    </GraphWrapper>
  );
};

export default GraphHeader;
