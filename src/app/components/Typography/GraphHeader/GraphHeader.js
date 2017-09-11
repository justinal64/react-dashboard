import React from "react";
import "./GraphHeader.scss";

const Segment = props => {
  return (
    <div className="top-left-header">
      <span>{props.title}</span>
    </div>
  );
};

export default Segment;
