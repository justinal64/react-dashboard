import React, { Component } from "react";
import {
  ProgressBarHeader,
  ProgressBarSubheader,
  ProgressBarStyled
} from "./Styles";

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
        <tbody>
          <tr>
            <th>Cool icon</th>
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>Cool icon</th>
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>Cool icon</th>
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>Cool icon</th>
            <th>Justinal64</th>
            <th>USA</th>
            <th>ProgressBar</th>
            <th>Visa</th>
            <th>5 minutes ago</th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
