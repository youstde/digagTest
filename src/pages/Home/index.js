import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h2>his is home</h2>
    <Link to="/about">About</Link>
    &nbsp;
    <Link to="/contact">Contact</Link>
    &nbsp;
    <Link to="/login">Login</Link>
  </div>
);

export default Home;
