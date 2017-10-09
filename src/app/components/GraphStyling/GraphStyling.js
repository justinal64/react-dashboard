import React from "react";
import styled from "styled-components";

const UpdateTime = styled.div`font-size: 1.25em;`;

const GraphStyling = props => {
  return (
    <UpdateTime>
      <div>{props.title}</div>
    </UpdateTime>
  );
};

export default GraphStyling;
