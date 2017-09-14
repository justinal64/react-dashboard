import React from "react";
import styled from "styled-components";
// import "./GraphHeader.scss";

const GraphHeader = props => {
  const TopLeftHeader = styled.div`align-items: left;`;
  return (
    <TopLeftHeader>
      <span>{props.title}</span>
    </TopLeftHeader>
  );
};

export default GraphHeader;
