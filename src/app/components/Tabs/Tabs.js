import React from "react";
import styled from "styled-components";
import "./Styles.scss";
const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #ddd;
`;

const Div = styled.div`
  background-color: ${props => (props.active ? "white" : "white")};
  display: ${props => (props.active ? "block" : "none")};
`;

const A = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #384042;
  background-color: ${props => (props.active ? "white" : "#c1c1c1")};
  border-color: #e1e6ef;
  border-bottom-color: #fff;
`;

const isActive = (e, anchor) => {
  e.preventDefault();
  console.log(e);
  console.log(anchor);
  console.log("Test Working!!");
  let tabs = document.getElementsByClassName("tabs");
  console.log(tabs);
};

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: "active",
      profile: "",
      messages: ""
    };
  }
  render() {
    return (
      <UL className="tabs">
        <li>
          <A href="#" role="button" onClick={e => isActive(e, "Home")} active>
            Home
          </A>
          <button title="Button" onClick={e => isActive(e, "Home")}>
            Button
          </button>
        </li>
        <li>
          <A href="#" role="button" onClick={e => isActive(e, "Profile")}>
            Profile
          </A>
        </li>
        <li>
          <A href="#" role="button" onClick={e => isActive(e, "Messages")}>
            Messages
          </A>
        </li>
        <Div data="home" active>
          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Div>
        <Div data="profile">
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Div>
        <Div data="messages">
          3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Div>
      </UL>
    );
  }
}

export default Tabs;
