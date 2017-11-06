import React, { Component } from "react";
import { TableLeftAligned, TBody, TH, TD } from "./Styles";
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
            <TD>ElizabeTD Burke</TD>
            <TD>2012/01/01</TD>
            <TD>Member</TD>
            <TD>
              <Label title="Success" color="Green" />
            </TD>
          </tr>
          <tr>
            <TD>TDeodore Winters</TD>
            <TD>2012/01/01</TD>
            <TD>Administartor</TD>
            <TD>
              <Label title="Banned" color="Red" />
            </TD>
          </tr>
          <tr>
            <TD>Peter Burke</TD>
            <TD>2012/01/01</TD>
            <TD>Staff</TD>
            <TD>
              <Label title="Inactive" color="Grey" />
            </TD>
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
