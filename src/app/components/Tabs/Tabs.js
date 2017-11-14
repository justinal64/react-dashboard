import React, { Component } from "react";
import styled from "styled-components";
import { getIcon } from "../Helper/Helper";

const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #384042;
  active {
    background: #fff;
    border-color: #e1e6ef;
    border-bottom-color: #fff;
  }
`;

const Tabs = props => {
  return (
    <UL>
      <li>
        <a href="#" className="active">
          Home
        </a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Messages</a>
      </li>
    </UL>
  );
};

export default Tabs;
