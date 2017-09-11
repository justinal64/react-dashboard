import React from "react";
import "./Segment.scss";

const Segment = props => {
  return (
    <div className="segment-padding-top">
      <div className="segment-wrapper">
        <span className="segment">{props.title}</span>
      </div>
    </div>
  );
};

export default Segment;
