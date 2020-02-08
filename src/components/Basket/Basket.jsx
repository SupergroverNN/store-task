import React, { useState } from "react";
import style from "./Basket.module.scss";
import close_icon from "../../assets/icons/close_icon.jpg";
import confirmed_img from "../../assets/images/confirmed.svg";
import { renderBasket, renderConfirm } from "./basket_func";

const Basket = props => {
  const { setIsBasket } = props;
  const [status, setStatus] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

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
            <h1>basket</h1>
            <div className={style.orders_wrapper}>
              {renderBasket(props)}
              <div className={style.button_wrapper}>
                <button
                  className={style.basket_button}
                  onClick={() => setStatus(1)}
                >
                  Continue
                </button>
              </div>
            </div>
          </>
        )}
        {status === 1 && (
          <>
            <h1>Confirm order</h1>
            <div className={style.orders_wrapper}>
              {renderConfirm(props, name, setName, phone, setPhone, setStatus)}
            </div>
          </>
        )}
        {status === 2 && (
          <div className={style.orders_wrapper}>
            <img className={style.confirmed_img} src={confirmed_img} alt="confirmed" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
