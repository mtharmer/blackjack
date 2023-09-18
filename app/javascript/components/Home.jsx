import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>You made it!</h1>
      <h2>Click below to play a game:</h2>
      <Link to="/lobby" className="btn btn-primary" role="button">Play</Link>
    </div>
  );
}
