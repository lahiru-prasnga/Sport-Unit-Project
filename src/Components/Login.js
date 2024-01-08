import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login_css from './Login.module.css'
import { Link  } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import validation from "./Validation.js";
import ForgotPWD from './FogotPWD';

function Login({ switchForm  }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  function handleValidation(e) {
    e.preventDefault();
    setErrors(validation(values));
  }
  const handleforgorpwd =() =>{

  }
  return (
   
    <div className={Login_css.login_container}>
      <div className={Login_css.login_form}>
        <div className="form">
          <form className="border p-3" onSubmit={handleValidation}>
            <div className={Login_css.header}>
              <h2>Login</h2>
            </div>
            <div className={Login_css.input_login}>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={values.email}
                name="email"
                onChange={handleInput}
                className="form-control"
              />

              {errors.email && (
                <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
              )}
            </div>
            <div className={Login_css.input_login}>
              <label>Password:</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={values.password}
                name="password"
                onChange={handleInput}
                className="form-control"
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <div className={Login_css.submit_login}>
              <button className="btn" type="submit">
                Login
              </button>
            </div>
            <div className="remember me">
              <input type="checkbox" title="remember_me" />
              Remember me
            </div>
            <br />
           

            <a href="/" onClick={() => switchForm("pwdReset")}>
              Forgot Password
            </a>
            <p>
                Don't have an account ? 
                
       
      
      
            <span className={Login_css.signup_link} onClick={switchForm}>
              Click here to Create Account!
            </span> </p>
          </form>
        </div>
      </div>
   
    </div>
  );
}

export default Login;
