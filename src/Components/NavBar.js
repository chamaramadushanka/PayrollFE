// src/components/NavBar.js
import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {/* {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )} */}

      {isAuthenticated &&  <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
     <button onClick={() => logout()}>Log out</button> </span>}
    </div>
  );
};

export default NavBar;