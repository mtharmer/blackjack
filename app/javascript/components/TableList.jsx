import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function TableList() {
  const params = useParams();
  const [tables, setTables] = useState([]);

  useEffect(() => {
    url = `/api/v1/tables/${params.id}`;
    fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      throw new Error("Error loading tables");
    })
    .then((res) => setTables(res))
    .catch((err) => console.log(err.message))
  }, [params.id]);

  const allTables = tables.map((t, index) => (
    <div key={index} className="col-sm-6 col-lg-3">
      <div className="card">
        <h5>Open Seats: 1</h5>
        <Link to={`/table/${t.unique_id}`} className="btn btn-primary">
          Join Table
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
