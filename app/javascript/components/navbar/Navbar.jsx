import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  function logout(event) {
    event.preventDefault()
    const url = '/api/logout';
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: {}})
    })
    .then((res) => res.json())
    .then(() => console.log("yay"))
    .catch((err) => console.log(err.message));
  }

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
          {/* TODO: Move these links to the right and hide/show based on authenticated status */}
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
