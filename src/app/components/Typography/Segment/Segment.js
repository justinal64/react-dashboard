import React from "react";
import { Subtitle, SegmentWrapper } from "./Styles";
import FontAwesome from "react-fontawesome";

const Segment = props => {
  return (
    <SegmentWrapper font={props.font}>
      <Subtitle>{props.title}</Subtitle>
    </SegmentWrapper>
  );
};

export default Segment;
