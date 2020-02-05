import React, { useState } from "react";
import style from "./Header.module.scss";
import { renderMenu } from "./header_func";
import google_logo from '../../assets/images/google_logo.png';

const logo = require("../../assets/images/main_logo.jpg");

const Header = () => {
  const [active, setActive] = useState('home');
  return (
    <div className={style.main}>
      <img src={logo} title="Supergrover store" alt="main logo" />
      <nav className={style.menu}>
        {renderMenu(active, setActive)}
      </nav>
      <div className={style.auth}>
        <img title="google auth" src={google_logo} alt="google logo"/>
      </div>
    </div>
  );
};

export default Header;
