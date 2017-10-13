import React from "react";

import FontAwesome from "react-fontawesome";

export const getIcon = font => {
  return (
    <FontAwesome
      name={font}
      style={navColorScheme}
      rotate={270}
      inverse={true}
    />
  );
};

let navColorScheme = {
  color: "#9faecb",
  float: "left",
  marginLeft: ".25em",
  width: "20px",
  height: "20px"
};
