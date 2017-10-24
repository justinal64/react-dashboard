import React from "react";
import styled from "styled-components";

const addTitle = title => {
  if (title) return <span>{title}</span>;
};

const addSubTitle = subtitle => {
  if (subtitle) return <span>{subtitle}</span>;
};

const Header = props => {
  return (
    <div>
      {addTitle(props.title)}
      {addSubTitle(props.subtitle)}
    </div>
  );
};

export default Header;
