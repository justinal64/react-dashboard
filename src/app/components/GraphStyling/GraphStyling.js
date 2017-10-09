import React from "react";
import styled from "styled-components";

const ChartTitle = styled.div`
  font-weight: 700;
  line-height: 2em;
`;

const GraphStyling = props => {
  return (
    <ChartTitle>
      <span>{props.title}</span>
    </ChartTitle>
  );
};

export default GraphStyling;
