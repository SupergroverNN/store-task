import React from "react";
import style from "./Header.module.scss";

export const menu = ["home", "employees", "info about you", "basket"];

export function renderMenu (active, setActive) {
  return (
    <ul>
      {menu.map((item, index) => (
        <li key={`${item}${index}`} onClick={()=>setActive(item)} className={active === item ? style.active : ''}>{item}</li>
      ))}
    </ul>
  );
};

