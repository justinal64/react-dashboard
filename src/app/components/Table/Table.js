import React, { Component } from "react";
import { Table as StyledTable, TBody } from "./Styles";

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
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
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
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
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
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
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
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
            <th>5 minutes ago</th>
          </tr>
        </TBody>
      </table>
    );
  }
}

export default Table;
