import React from "react"
import { Link } from "react-router-dom"

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
        </ul>
      </div>
    </nav>
  );
}
