import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Link to="#" className="nav-link" onClick={() => loginWithRedirect()}>Log In</Link>;
};

export default LoginButton;
