import React from "react";
import styled from "styled-components";

const Segment = props => {
  const SegmentPaddingBottom = styled.div`padding-bottom: 1rem;`;
  const SegmentWrapper = styled.div`
    width: 90%;
    height: 30px;
    border-bottom: 1px solid white;
    text-align: center;
    margin: 0 auto;
  `;
  const Segment = styled.span`
    font-size: 2.5rem;
    background-color: black;
    padding: 0 10px;
    text-transform: uppercase;
  `;
  return (
    <SegmentPaddingBottom>
      <SegmentWrapper>
        <Segment>{props.title}</Segment>
      </SegmentWrapper>
    </SegmentPaddingBottom>
  );
};

export default Segment;
