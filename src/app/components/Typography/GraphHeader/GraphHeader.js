import React from "react";
import styled from "styled-components";
import { getAlignment, getFont } from "../../../../assets/stylesheets/Styles";
import { GraphHeader as StyledGraphHeader, GraphWrapper } from "./Styles";
const GraphHeader = props => {
  return (
    <GraphWrapper alignment={props.alignment}>
      <StyledGraphHeader font={props.font}>{props.title}</StyledGraphHeader>
    </GraphWrapper>
  );
};

export default GraphHeader;
