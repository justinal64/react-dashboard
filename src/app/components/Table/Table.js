import React, { Component } from "react";
import { Table as StyledTable, TBody } from "./Styles";
import { getIcon } from "../Helper/Helper";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <table>
        <thead>
          <tr>
            <th>User Icon</th>
            <th>User</th>
            <th>Country</th>
            <th>Usage</th>
            <th>Payment Method</th>
            <th>Activity</th>
          </tr>
        </thead>
        <TBody>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt=""
                className="src"
              />
            </th>
            <th>Elizabeth</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>{getIcon("cc-visa fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt=""
                className="src"
              />
            </th>
            <th>Mozzy</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>{getIcon("cc-mastercard fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt=""
                className="src"
              />
            </th>
            <th>Peter</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>{getIcon("cc-stripe fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt=""
                className="src"
              />
            </th>
            <th>Neil</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>{getIcon("cc-paypal fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
        </TBody>
      </table>
    );
    let navColorScheme = {
      color: "grey"
    };
  }
}

export default Table;
