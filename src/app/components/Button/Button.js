import React from "react";
import { getIcon } from "../Helper/Helper";
import { Button } from "./Styles";

const StyledButton = props => {
  const { icon, title, font, inverted, disabled, block, button } = props;
  let needIcon = icon ? getIcon(icon) : "";
  return (
    <Button
      button={button}
      title={title}
      font={font}
      inverted={inverted}
      disabled={disabled}
      display={block}
    >
      {needIcon}
      {title}
    </Button>
  );
};

export default StyledButton;
