import React from "react";
import LoginContainer from "../app/components/LoginContainer";

const Login = props => {
  return (
    <div>
      {console.log({ props })}
      <LoginContainer history={props.history} />
    </div>
  );
};

export default Login;
