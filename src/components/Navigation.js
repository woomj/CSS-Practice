import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <header>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>영화</h1>
      </Link>
      <li class="menu">
        <Link to={{ pathname: "/movie" }} style={{ textDecoration: "none" }}>
          지금 상영중
        </Link>
      </li>
      <li class="menu">
        <Link to={{ pathname: "/menu2" }} style={{ textDecoration: "none" }}>
          개봉임박
        </Link>
      </li>
      <li class="menu">
        <Link to={{ pathname: "/menu3" }} style={{ textDecoration: "none" }}>
          상영종료
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
