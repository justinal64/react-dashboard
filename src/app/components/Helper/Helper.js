import React from "react";
import FontAwesome from "react-fontawesome";

export const getIcon = (font, styles) => {
  return <FontAwesome name={font} style={styles} />;
};
