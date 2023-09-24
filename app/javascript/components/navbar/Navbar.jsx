import React from "react"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto m-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lobby">Lobby</Link>
          </li>
          <li className="nav-item">
            <LoginButton />
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
