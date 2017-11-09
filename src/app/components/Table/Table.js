import React, { Component } from "react";
import { TableLeftAligned } from "./Styles";
import { getIcon } from "../Helper/Helper";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Label from "../../components/Label/Label";
import { colors } from "../Styles/Styles";

const getTheme = color => {
  if (color && color.length !== undefined) return colors[color];
  return "transparent";
};

const Table = props => {
  return (
    <TableLeftAligned
      striped={props.striped}
      condensed={props.condensed}
      border={props.border}
    >
      <thead>
        <tr>
          <th>Username</th>
          <th>Date Registered</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Elizabeth Burke</td>
          <td>2012/01/01</td>
          <td>Member</td>
          <td>
            <Label title="Success" color={getTheme("success")} />
          </td>
        </tr>
        <tr>
          <td>Theodore Winters</td>
          <td>2012/01/01</td>
          <td>Administartor</td>
          <td>
            <Label title="Banned" color={getTheme("danger")} />
          </td>
        </tr>
        <tr>
          <td>Peter Burke</td>
          <td>2012/01/01</td>
          <td>Staff</td>
          <td>
            <Label title="Inactive" color={getTheme("secondary")} />
          </td>
        </tr>
        <tr>
          <td>Peter Burke</td>
          <td>2012/01/01</td>
          <td>Staff</td>
          <td>
            <Label title="Pending" color={getTheme("warning")} />
          </td>
        </tr>
        <tr>
          <td>Neal Caffery</td>
          <td>2012/01/01</td>
          <td>Staff</td>
          <td>
            <Label title="Active" color={getTheme("success")} />
          </td>
        </tr>
      </tbody>
    </TableLeftAligned>
  );
  let navColorScheme = {
    color: "grey"
  };
};

export default Table;
