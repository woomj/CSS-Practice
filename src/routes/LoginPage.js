import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

//로그인화면 생성
const LoginPage = () => {
  return (
    <div className="title">
      <h1>로그인 페이지</h1>

      <div className="log_in">
        <ul>
          <li>아이디</li>
          <li>
            <input type="text" name="ID" placeholder="ID" />
          </li>
          <li>비밀번호</li>
          <li>
            <input type="password" name="PW" placeholder="PassWord" />
          </li>
          <li class="loginbutton">
            <button type="button">로그인</button>
          </li>
          <li class="registe">
            <Link to={{ pathname: "/RegistePage" }}>회원가입</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;
