import React from "react";
import styled from "styled-components";
import "./Segment.scss";

const Segment = props => {
  const SegmentPaddingTop = styled.div`padding-bottom: 1rem;`;
  const Segment = styled.div`
    font-size: 2.5rem;
    background-color: black;
    padding: 0 10px;
    text-transform: uppercase;
  `;
  const SegmentWrapper = styled.div`
    width: 90%;
    height: 30px;
    border-bottom: 1px solid white;
    text-align: center;
    margin: 0 auto;
  `;
  return (
    <SegmentPaddingTop>
      <SegmentWrapper>
        <Segment>{props.title}</Segment>
      </SegmentWrapper>
    </SegmentPaddingTop>
  );
};

export default Segment;
