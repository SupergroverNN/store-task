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
  const [status, setStatus] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const changeHandler = (e) => {
    const { id, value } = e.target;
    id === "name" ? setName(value) : setPhone(value);
  }
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
            <div className={`${style.orders_wrapper} ${style.confirm}`}>
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
              <div className={style.one_input_wrapper}>
                <label htmlFor="name">Name</label>
                <input id="name" onChange={changeHandler} type="text" value={name} />
              </div>
              <div className={style.one_input_wrapper}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" onChange={changeHandler} type="number" value={phone}/>
              </div>
              <div className={style.confirm_button_wrapper}>
                <button className={style.basket_button} onClick={() => setStatus(0)}>
                  Back to basket
                </button>
                <button className={style.basket_button} onClick={() => setStatus(2)}>
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
