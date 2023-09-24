import React from "react";
import TableTypeList from "./TableTypeList";

export default function Lobby() {
  return (
    <div className="container">
      <div className="mt-4 mb-4 p-4 bg-primary text-white rounded-5">
        <p>Select a table below to join a table!</p>
      </div>
      <div className="mt-4">
        <TableTypeList />
      </div>
    </div>
  );
}
