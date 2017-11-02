import React from "react";
import { Border, UpdateTime } from "./Styles";

const dateFormat = time => {
  if (time <= 0) return `today`;
  else if (time === 1) return `${time} day ago`;
  return `${time} days ago`;
};

const GraphFooter = props => {
  return (
    <Border>
      <UpdateTime>Update icon here</UpdateTime>
    </Border>
  );
};

export default GraphFooter;
