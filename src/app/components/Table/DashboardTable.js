import React, { Component } from "react";
import { TBody, Table } from "./Styles";
import Pagination from "../Pagination/Pagination";
import { getIcon } from "../Helper/Helper";
import GraphHeader from "../Typography/GraphHeader/GraphHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

class DashboardTable extends React.Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <Table className="hoverTable">
        <thead>
          <tr>
            <th>{getIcon("user-o", navColorScheme)}</th>
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
              {/* Make a rounded Image Component */}
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt="Elizabeth Burk Image"
                className="src"
              />
            </th>
            <th>
              <GraphHeader title="Elizabeth Burk" />
              <GraphHeader
                title="New | Registered: Jan 1, 2015"
                font={0.75}
                color="grey"
              />
            </th>
            <th>USA</th>
            <th>
              <div className="table_usage">
                <span>50%</span>
                <span>Jun 11, 2015 - Jul 10, 2015</span>
              </div>
              <ProgressBar value={50} backgroundColor="green" />
            </th>
            <th>{getIcon("cc-visa fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt="Theodore Winters Image"
                className="src"
              />
            </th>
            <th>
              <GraphHeader title="Theodore Winters" />
              <GraphHeader
                title="Recurring | Registered: Jan 1, 2015"
                font={0.75}
                color="grey"
              />
            </th>
            <th>USA</th>
            <th>
              <div className="table_usage">
                <span>10%</span>
                <span>Jun 11, 2015 - Jul 10, 2015</span>
              </div>
              <ProgressBar value={10} backgroundColor="blue" />
            </th>
            <th>{getIcon("cc-mastercard fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt="Peter Burk Image"
                className="src"
              />
            </th>
            <th>
              <GraphHeader title="Peter Burk" />
              <GraphHeader
                title="New | Registered: Jan 1, 2015"
                font={0.75}
                color="grey"
              />
            </th>
            <th>USA</th>
            <th>
              <div className="table_usage">
                <span>74%</span>
                <span>Jun 11, 2015 - Jul 10, 2015</span>
              </div>
              <ProgressBar value={74} backgroundColor="yellow" />
            </th>
            <th>{getIcon("cc-stripe fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
          <tr>
            <th>
              <img
                src="https://randomuser.me/api/portraits/thumb/men/83.jpg"
                alt="Neil Caffery Image"
                className="src"
              />
            </th>
            <th>
              <GraphHeader title="Neil Caffrey" />
              <GraphHeader
                title="New | Registered: Jan 1, 2015"
                font={0.75}
                color="grey"
              />
            </th>
            <th>USA</th>
            <th>
              <div className="table_usage">
                <span>98%</span>
                <span>Jun 11, 2015 - Jul 10, 2015</span>
              </div>
              <ProgressBar value={98} backgroundColor="red" />
            </th>
            <th>{getIcon("cc-paypal fa-3x", navColorScheme)}</th>
            <th>5 minutes ago</th>
          </tr>
        </TBody>
      </Table>
    );
    let navColorScheme = {
      color: "grey"
    };
  }
}

export default DashboardTable;
