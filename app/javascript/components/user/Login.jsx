import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", password: ""});

  function inputChanged(event) {
    const value = event.target.value;
    const name = event.target.id;
    setUser(prevUser => ({...prevUser, [name]: value}));
  }

  function submitForm(event) {
    event.preventDefault();

    const token = document.querySelector('meta[name="csrf-token"]').content;

    const url = `/api/login`;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: user})
    })
    .then((res) => res.json())
    .then(() => navigate("/"))
    .catch((err) => console.log(url, err.message));
  }

  return (
    <div className="container">
      <form>
        <div className="col-lg-4">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={user.username} onChange={inputChanged} />
        </div>
        <div className="w-100"></div>
        <div className="col-lg-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={user.password} onChange={inputChanged} />
        </div>
        <button type="submit" className="btn btn-primary mt-2" onClick={submitForm}>Submit</button>
      </form>
    </div>
  )
}
