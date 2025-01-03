import React from "react";
import { Link } from "react-router";

export const Dashboard = () => {
  return (
    <body className="body3">
      <header className="container mt-3">
        <div>
          <h1>Hacker</h1>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </ul>
        </nav>
      </header>
    </body>
  );
}
export default Dashboard;
