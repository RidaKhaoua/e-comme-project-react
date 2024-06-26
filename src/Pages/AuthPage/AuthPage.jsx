import imageLogin from "/public/Images/Group 2014.png";
import "./AuthPage.css";
import { useState } from "react";
import LoginForm from "../../Components/Auth/LoginForm";
import RegisterForm from "../../Components/Auth/RegisterForm";
function AuthPage() {
  const [componentName, setComponentName] = useState("login");

  const handelChangeComponentName = (name) => {
    setComponentName(name);
  };

  return (
    <>
      <div className="auth">
        <div className="auth__left">
          <div className="auth__left-content">
            <h6 className="auth__left-subtitle">Welcome Shopifyo</h6>
            <div className="auth-left__form">
              <LoginForm
                componentName={componentName}
                handelChangeComponentName={handelChangeComponentName}
              />
              <RegisterForm
                componentName={componentName}
                handelChangeComponentName={handelChangeComponentName}
              />
            </div>
            <div className="auth-left__switch-bettween-forms">
            {componentName === "login" ? (
              <span>
                you don't have an account?
                <button
                  onClick={() => {
                    handelChangeComponentName("register");
                  }}>
                  Register
                </button>
              </span>
            ) : (
              <span>
                you have an account?{" "}
                <button
                  onClick={() => {
                    handelChangeComponentName("login");
                  }}>
                  Login
                </button>
              </span>
            )}
            </div>
          </div>
        </div>
        <div className="auth__right">
          <img src={imageLogin} alt="image" />
        </div>
      </div>
    </>
  );
}

export default AuthPage;
