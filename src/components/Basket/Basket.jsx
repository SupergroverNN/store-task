import React, { useState } from "react";
import style from "./Basket.module.scss";
import close_icon from "../../assets/icons/close_icon.jpg";
import { renderBasket } from "./basket_func";

const state = {
  FIRST_PAGE: 0,
  CONFIRM_ORDER: 1,
  CONFIRMED: 2
};

function calcSum(order) {
  return Object.keys(order).reduce((acc, key) => {
    return acc + order[key].price * order[key].count;
  }, 0);
}

const Basket = props => {
  const { data, setData, order, setOrder, setIsBasket } = props;
  const [status, setStatus] = useState(0);
  return (
    <div className={style.main}>
      <div className={style.content}>
        <img
          title="close"
          className={style.close_button}
          onClick={() => setIsBasket(false)}
          src={close_icon}
          alt="close"
        />
        {status === 0 && (
          <>
            <h1>Basket</h1>
            <div className={style.orders_wrapper}>
              {renderBasket(props)}
              <button className={style.confirm_button} onClick={() => setStatus(1)}>
                Continue
              </button>
            </div>
          </>
        )}
        {status === 1 && (
          <>
            <h1>Confirm order</h1>
            <div className={style.orders_wrapper}>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                  </tr>
                  {Object.keys(order).map(key => {
                    return (
                      <tr key={`${key}`}>
                        <td>{key}</td>
                        <td>{order[key].count}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Total:</td>
                    <td>{calcSum(order)}</td>
                  </tr>
                </tbody>
              </table>
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="text" />
              </div>
              <div className={style.confirm_button_wrapper}>
                <button className={style.confirm_button} onClick={() => setStatus(0)}>
                  Back to basket
                </button>
                <button className={style.confirm_button} onClick={() => setStatus(2)}>
                  Create order
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
