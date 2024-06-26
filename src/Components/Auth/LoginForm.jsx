/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Auth.css";
/* Icons */
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
/* Components */

import Formcontrol from "../Formcontrol/Formcontrol";

import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function LoginForm({ componentName }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsvisible] = useState(false);

  const navigate = useNavigate();
  const { user, login } = useAuth();

  const handelShowPassword = () => {
    setIsvisible(!isVisible);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const handelLogin = (e) => {
    e.preventDefault();
    if (user.password === password && user.email === email  ) {
      login()
      navigate("/e-comme-project-react");
    } else {
      alert("password  or email is incorrect");
    }
  };

  return (
    <div className={`login ${componentName === "login" ? "show" : "hide"}`}>
      <h2 className="login__title">Sing in</h2>
      <form className="login__left-form" onSubmit={handelLogin}>
        <Formcontrol
          type="email"
          placeHolder="example@gmail.com"
          icon={<EmailOutlinedIcon />}
          handelChangeInput={handelEmail}
          value={email}
        />
        <Formcontrol
          value={password}
          type={isVisible ? "text" : "password"}
          placeHolder="***********"
          icon={<LockOutlinedIcon />}
          handelChangeInput={handelPassword}
          isVisible={isVisible}
          showPassword={handelShowPassword}
        />
        {componentName === "login" && (
          <p className="login__left-forget-pswd">
            <a href="#">Forget password?</a>
          </p>
        )}
        <button className="sign-in">
          Sing in <EastOutlinedIcon />
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
