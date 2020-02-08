import React from "react";
import style from "./Header.module.scss";

export const menu = ["home", "orders", "basket"];

export function renderMenu(active, setActive, setIsBasket, setIsOrders) {
  return (
    <ul>
      {menu.map((item, index) => {
        switch (item) {
          case "basket":
            return (
              <li
                key={`${item}${index}`}
                onClick={() => {
                  setActive(item);
                  setIsBasket(true);
                }}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
          case "orders":
            return (
              <li
                key={`${item}${index}`}
                onClick={() => {
                  setActive(item);
                  setIsOrders(true);
                }}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
          default:
            return (
              <li
                key={`${item}${index}`}
                onClick={() => setActive(item)}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
        }
      })}
    </ul>
  );
}
