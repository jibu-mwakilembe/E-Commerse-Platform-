import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link to="/product">to products</Link>
      <h1>this is dashboard page</h1>
      Dashboard
    </div>
  );
}

export default Dashboard;
