import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Lobby from "../components/Lobby";
import Navbar from "../components/navbar/Navbar";
import Table from "../components/Table";
import TableList from "../components/TableList";
import Login from "../components/user/Login";
import Signup from "../components/user/Signup";

export default function AppRoutes() {
  function loggedIn() {
    console.log("Logged In");
  }

  function loggedOut() {
    console.log("Logged Out");
  }

  useEffect(() => {
    const url = '/api/logged_in';
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.logged_in) {
        loggedIn();
      } else {
        loggedOut();
      }
    })
    .catch((err) => console.log(err.message));
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/tables/:id" element={<TableList />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
