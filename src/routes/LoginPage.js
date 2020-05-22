import React from "react";
import "./LoginPage.css";

//로그인화면 생성
const LoginPage = () => {
  return (
    <div className="title">
      <h1>로그인 페이지</h1>

      <div className="log_in">
        <ul>
          <li>
            <input type="text" placeholder="ID" />
          </li>
          <li>
            <input type="password" placeholder="PassWord" />
          </li>
          <li>
            <button type="button">로그인</button>
          </li>
          <li>
            <button type="button">회원가입</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginPage;
