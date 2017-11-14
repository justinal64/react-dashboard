import React, { Component } from "react";
import "./Styles.scss";
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

const test = e => {
  e.preventDefault();
  console.log(e);
  console.log(this);
  console.log("Test Working!!");
};

const Tabs = props => {
  return (
    <UL className="tabs">
      <li>
        <a href="#" role="button" className="active" onClick={test}>
          Home
        </a>
      </li>
      <li>
        <a href="#" role="button" onClick={test}>
          Profile
        </a>
      </li>
      <li>
        <a href="#" role="button" onClick={test}>
          Messages
        </a>
      </li>
      <div className="active">
        1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </UL>
  );
};

export default Tabs;
