import React from "react";
import style from "./Header.module.scss";

export const menu = ["home", "employees", "info about you", "basket"];

export function renderMenu (active, setActive, setIsBasket) {
  return (
    <ul>
      {menu.map((item, index) => {
        if(item === 'basket') {
          return <li key={`${item}${index}`} onClick={()=>{setActive(item); setIsBasket(true)}} className={active === item ? style.active : ''}>{item}</li>
        } 
        return <li key={`${item}${index}`} onClick={()=>setActive(item)} className={active === item ? style.active : ''}>{item}</li>
      }
        )}
    </ul>
  );
};

