import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({email: "", username: "", password: "", password_confirmation: ""});

  function inputChanged(event) {
    const value = event.target.value;
    const name = event.target.id;
    setUser(prevUser => ({...prevUser, [name]: value}));
  }

  function submitForm(event) {
    event.preventDefault();
    console.log(user);
    console.log(event.target);
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const url = '/api/v1/users';
    fetch(url, {
      method: 'POST',
      headers: {
        "X-CSRF-Token": token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((res) => res.json())
    .then(() => navigate("/login"))
    .catch((err) => console.log(err.message));
  }

  return (
    <div className="container">
      <form>
        <div className="col-lg-4">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" className="form-control" id="email" value={user.email} onChange={inputChanged} />
        </div>
        <div className="w-100"></div>
        <div className="col-lg-4">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" value={user.username} onChange={inputChanged} />
        </div>
        <div className="w-100"></div>
        <div className="col-lg-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={user.password} onChange={inputChanged} />
        </div>
        <div className="w-100"></div>
        <div className="col-lg-4">
          <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="password_confirmation" value={user.password_confirmation} onChange={inputChanged} />
        </div>
        <button type="submit" className="btn btn-primary mt-2" onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}
