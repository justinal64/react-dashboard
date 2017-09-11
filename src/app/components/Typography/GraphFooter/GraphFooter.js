import React from "react";
import UpdateIcon from "grommet/components/icons/base/Update";
import "./GraphFooter.scss";

const dateFormat = time => {
  if (time <= 0) return `today`;
  else if (time === 1) return `${time} day ago`;
  return `${time} days ago`;
};

const GraphFooter = props => {
  return (
    <div className="top-border">
      <div className="update-time ">
        <UpdateIcon size="xsmall" /> - Updated {dateFormat(props.updatetime)}
      </div>
    </div>
  );
};

export default GraphFooter;
