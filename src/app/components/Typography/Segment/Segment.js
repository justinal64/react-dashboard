import React from "react";
import styled from "styled-components";

const Segment = props => {
  const SegmentPadding = styled.div`padding-bottom: 1rem;`;

  const Segment = styled.span`
    font-size: 2.5rem;
    background-color: black;
    padding: 0 1rem;
    text-transform: uppercase;
  `;

  const getPaddingBottom = props =>
    props.paddingBottom ? "padding-bottom: 1rem;" : "";

  const SegmentWrapper = styled.div`
    ${getPaddingBottom};
    width: 90%;
    height: 30px;
    border-bottom: 1px solid white;
    text-align: center;
    margin: 0 auto;
  `;
  return (
    <SegmentPadding>
      <SegmentWrapper>
        <Segment>{props.title}</Segment>
      </SegmentWrapper>
    </SegmentPadding>
  );
};

export default Segment;
