import React from "react";
import { Subtitle, SegmentWrapper } from "./Styles";

const Segment = props => {
  return (
    <SegmentWrapper font={props.font}>
      <Subtitle>{props.title}</Subtitle>
    </SegmentWrapper>
  );
};

export default Segment;
