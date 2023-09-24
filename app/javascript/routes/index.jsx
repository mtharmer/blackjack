import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Lobby from "../components/Lobby";
import Navbar from "../components/navbar/Navbar";
import Profile from "../components/Profile";
import Table from "../components/Table";
import TableList from "../components/TableList";

export default (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/tables/:id" element={<TableList />} />
      <Route path="/table/:id" element={<Table />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);
