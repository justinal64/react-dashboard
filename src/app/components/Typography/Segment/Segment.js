import React from "react";
import {
  Segment as StyledSegment,
  SegmentWrapper,
  SegmentPadding
} from "./Styles";
const Segment = props => {
  return (
    <SegmentPadding>
      <SegmentWrapper>
        <StyledSegment>{props.title}</StyledSegment>
      </SegmentWrapper>
    </SegmentPadding>
  );
};

export default Segment;
