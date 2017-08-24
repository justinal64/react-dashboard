import React from "react";
import LoginContainer from "../app/components/LoginContainer";
import LoginForm from "grommet/components/LoginForm";
const Login = props => {
  return (
    <div>
      <LoginContainer />
      <LoginForm onSubmit={props} />
    </div>
  );
};

export default Login;
