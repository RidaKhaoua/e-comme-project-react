/* eslint-disable react/prop-types */
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import Formcontrol from "../../Components/Formcontrol/Formcontrol";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function RegisterForm({ componentName }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsvisible] = useState(false);
  const navigate = useNavigate();
  const {register} = useAuth();

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelUsername = (e) => {
    setUserName(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };


  const handelShowPassword = () => {
    setIsvisible(!isVisible);
  };

  return (
    <div
      className={`register ${componentName === "register" ? "show" : "hide"}`}>
      <h2 className="regiter__title">Sing up</h2>
      <form className="regiter__form">
        <Formcontrol
          type="text"
          placeHolder="Jhon Doe..."
          icon={<PersonOutlineOutlinedIcon />}
          handelChangeInput={handelUsername}
          value={userName}
        />

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

        <button className="sign-up" onClick={() => {
          register(email, password, userName)
          navigate("/e-comme-project-react")
        }}>
          Sing up <EastOutlinedIcon />
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
