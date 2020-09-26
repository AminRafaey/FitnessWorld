import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className="L_body">
      <div className="L_login-box">
        <h1>Login</h1>
        <div className="L_textbox">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>

        <div className="L_textbox">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>

        <Link to="/admin">
          {" "}
          <button
            className="L_btn"
            value="Sign in"
            style={{ border: "2px solid #696969", color: "white" }}
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};
