import React, { Component } from "react";
import { TableLeftAligned, TBody, TH } from "./Styles";
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
            <TH>Username</TH>
            <TH>Date Registered</TH>
            <TH>Role</TH>
            <TH>Status</TH>
          </tr>
        </thead>
        <TBody>
          <tr>
            <td>Elizabetd Burke</td>
            <td>2012/01/01</td>
            <td>Member</td>
            <td>
              <Label title="Success" color="Green" />
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
