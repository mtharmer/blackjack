import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
      <Link className="nav-link" to="#" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} >
        Logout
      </Link>
  );
};

export default LogoutButton;
