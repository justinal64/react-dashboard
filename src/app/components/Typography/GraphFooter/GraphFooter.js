import React from "react";
import UpdateIcon from "grommet/components/icons/base/Update";
import { Border, UpdateTime } from "./Styles";

const dateFormat = time => {
  if (time <= 0) return `today`;
  else if (time === 1) return `${time} day ago`;
  return `${time} days ago`;
};

const GraphFooter = props => {
  return (
    <Border>
      <UpdateTime>
        <UpdateIcon size="xsmall" /> - Updated {dateFormat(props.updatetime)}
      </UpdateTime>
    </Border>
  );
};

export default GraphFooter;
