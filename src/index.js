import "./assets/stylesheets/styles.scss";
import React from "react"; // import the main react dependency
import ReactDOM from "react-dom"; // import reactDOM
import App from "./app/App.jsx"; // import the main app component
import { Provider } from "react-redux";
import Store from "./Store";
import GrommetApp from "grommet/components/App";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import GrommetApp from "grommet/components/App"; Not working......
ReactDOM.render(
  <GrommetApp>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </GrommetApp>,
  document.getElementById("root")
); // render our App component and mount it to our #root element
