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
  background-color: white;
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
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
  let tabs = document.getElementsByClassName("tabs");
  let liElements = document.querySelectorAll(".tabs li");
  let divElements = document.querySelectorAll(".tabs div");

  console.log(divElements);
  console.log(liElements);
  showDiv(anchor, divElements);
  showLi(anchor, liElements);
};

const showDiv = (anchor, elements) => {
  elements.forEach(element => {});
  console.log("elements: ", elements);
  console.log("anchor: ", anchor);
};

const showLi = anchor => {
  console.log("showLi working!!!");
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
          <A
            href="#"
            className="active"
            role="button"
            onClick={e => isActive(e, "Home")}
          >
            Home
          </A>
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
        <Div data="home" className="show">
          1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Div>
        <Div data="profile" className="hide">
          2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Div>
        <Div data="messages" className="hide">
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
