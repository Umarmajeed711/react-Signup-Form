
import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <div className="body1">

      {/* header */}
    <header className="container mt-3">
      <div>
        <h1>Hacker</h1>
      </div>
      <nav>
        <ul className="nav">
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/login"}>Login</Link></li>
          <li><Link to={"/signup"}>Signup</Link></li>
        </ul>
      </nav>
    </header>

     {/* center div */}
    <div
      className="d-flex justify-content-center align-items-center"
      style={{height:"85vh",overflow:"hidden"}}
    >
      <Link to={"signup"} className="button2">Start your Journey! </Link>
    </div>
  

  </div>

  )
}
export default Home;
