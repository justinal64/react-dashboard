import React, { Component } from "react";
import styled from "styled-components";
import "./Styles.scss";

const Label = styled.label`
  display: inline-block;
  height: 1rem;
  position: relative;
  width: 3rem;
`;

class Switch extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <Label>
        <input type="checkbox" id="checkbox" />
        <div className="slider round" />
      </Label>
    );
  }
}

export default Switch;
