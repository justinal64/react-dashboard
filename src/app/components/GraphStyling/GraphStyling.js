import React from "react";
import styled from "styled-components";

const ChartTitle = styled.div`
  font-size: 1.25em;
  line-height: 1.5em;
  background: #ededed;
  width: 100%;
`;

const GraphStyling = props => {
  return (
    <ChartTitle>
      <span>{props.title}</span>
    </ChartTitle>
  );
};

export default GraphStyling;
