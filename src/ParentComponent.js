// ParentComponent.js
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import Form from "./Components/form";
import FogotPWD from "./Components/FogotPWD";


const ParentComponent = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
 
  const [showForm, setShowForm] = useState(false);

  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const switchForm = (event) => {
    event.preventDefault();
    setShowForm(false);
    setShowForgotPassword(false);

    // Simulate a delay of 2 seconds (2000 milliseconds) before switching forms
    const delayTimeout = setTimeout(() => {
      setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
      setShowForm(true);
    }, 1000);

    // Clear the timeout when unmounting or switching to another form
    return () => clearTimeout(delayTimeout);
  };

  const showForgotPasswordForm = (event) => {
    event.preventDefault();
    setShowForm(false);

    // Simulate a delay before showing the Forgot Password form
    const delayTimeout = setTimeout(() => {
      setShowForgotPassword(true);
    }, 1000);

    // Clear the timeout when unmounting or switching to another form
    return () => clearTimeout(delayTimeout);
  };

  

  return (
    <div>
     
{showForm && isLoginForm ? (
        <>
          <Login
            switchForm={(event) => switchForm(event, "form")}
            showForm={() => setShowForm(false)}
          />
         
        </>
      ) : (
        <Form
          switchForm={(event) => switchForm(event, "login")}
          showForm={() => setShowForm(false)}
        />
      )}

      {showForgotPassword && (
        <FogotPWD
          switchForm={(event) => switchForm(event, "pwdReset")}
          showForm={() => setShowForm(false)}
          onCancel={() => setShowForgotPassword(false)}
        />
      )}





    </div>
  );
};

export default ParentComponent;
