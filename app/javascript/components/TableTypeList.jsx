import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTableTypeList } from "../actions/tableActions";

export default function TableTypeList() {
  const [tables, setTables] = useState([]);

  useEffect(() => getTableTypeList(setTables), []);

  const allTables = tables.map((t, index) => (
    <div key={index} className="col-sm-6 col-lg-3">
      <div className="card">
        <h4>Buy In ${t.buy_in_min} - ${t.buy_in_max}</h4>
        <h5>${t.ante} ante</h5>
        <Link to={`/tables/${t.id}`} className="btn btn-primary">
          Select Table Type
        </Link>
      </div>
    </div>
  ));

  const noTables = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>No tables at the moment...</h4>
    </div>
  );

  return (
    <div className="row">
      {tables.length > 0 ? allTables : noTables}
    </div>
  )
}
