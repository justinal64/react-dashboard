import React, { Component } from "react";
import { TableLeftAligned, TBody } from "./Styles";
import { getIcon } from "../Helper/Helper";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Label from "../../components/Label/Label";
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
            <td>Elizabetd Burke</td>
            <td>2012/01/01</td>
            <td>Member</td>
            <td>
              <Label title="test" color="pink" />
            </td>
          </tr>
          <tr>
            <td>Tdeodore Winters</td>
            <td>2012/01/01</td>
            <td>Administartor</td>
            <td>Administartor</td>
          </tr>
          <tr>
            <td>Peter Burke</td>
            <td>2012/01/01</td>
            <td>Staff</td>
            <td>Staff</td>
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
