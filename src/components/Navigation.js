import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>Home</h1>
      </Link>
      <li class="menu">
        <Link to={{ pathname: "/menu1" }} style={{ textDecoration: "none" }}>
          menu1
        </Link>
      </li>
      <li class="menu">
        <Link to={{ pathname: "/menu2" }} style={{ textDecoration: "none" }}>
          menu2
        </Link>
      </li>
      <li class="menu">
        <Link to={{ pathname: "/menu3" }} style={{ textDecoration: "none" }}>
          menu3
        </Link>
      </li>
      <li class="login">
        <a
          href="http://localhost:3000/#/login"
          style={{ textDecoration: "none" }}
        >
          로그인
        </a>
      </li>
    </header>
  );
}

export default Navigation;
