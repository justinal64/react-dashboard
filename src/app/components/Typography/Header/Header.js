import React from "react";
import styled from "styled-components";
const Header = props => {
  return (
    <div>
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
    </div>
  );
};

export default Header;
