
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./Header.css";
import { useState } from "react";

import Navigation from "../Nav/Nav";
import Logo from "../Logo/Logo";

export default function Header() {
  const [showNav, setShowNav] = useState(false);


  const handelShowNave = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <div className="container">
        <Logo/>
        <Navigation className="header__nav" />
        <div className="header__toggle-menu" onClick={handelShowNave}>
          <MenuOutlinedIcon />
        </div>
        {showNav && (
          <div className={`header__menu ${showNav ? "active" : ""}`}>
            <Navigation className="header__menu-nav" />
          </div>
        )}
      </div>
    </header>
  );
}
