import React, { Component } from "react";
import { TableLeftAligned, TBody } from "./Styles";
import { getIcon } from "../Helper/Helper";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <TableLeftAligned>
        <thead>
          <tr>
            <th>Username</th>
            <th>Date Registered</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <TBody>
          <tr>
            <th>Elizabeth Burke</th>
            <th>2012/01/01</th>
            <th>Catering</th>
            <th>Member</th>
          </tr>
          <tr>
            <th>Theodore Winters</th>
            <th>2012/01/01</th>
            <th>ConMan</th>
            <th>Administartor</th>
          </tr>
          <tr>
            <th>Peter Burke</th>
            <th>2012/01/01</th>
            <th>ConMan</th>
            <th>Staff</th>
          </tr>
        </TBody>
      </TableLeftAligned>
    );
    let navColorScheme = {
      color: "grey"
    };
  }
}

export default Table;
