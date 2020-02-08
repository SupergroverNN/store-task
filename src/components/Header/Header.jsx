import React, { useState } from "react";
import style from "./Header.module.scss";
import { renderMenu, renderContent } from "./header_func";

const logo = require("../../assets/images/main_logo.jpg");

const Header = props => {
  const { active, order, setIsBasket, setIsOrders, setActive } = props;
  const [data, setData] = useState(null);
  return (
    <div className={style.main}>
      <img src={logo} title="SupergroverNN store" alt="main logo" />
      <nav className={style.menu}>
        {renderMenu(active, setActive, setIsBasket, setIsOrders, setActive)}
        <div
          className={`${style.red_circle} ${Object.keys(order).length ? style.active : ""}`}
        ></div>
      </nav>
      {renderContent(data, setData)}
    </div>
  );
};

export default Header;
