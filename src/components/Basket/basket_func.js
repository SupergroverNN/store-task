import React from "react";
import style from "./Basket.module.scss";
import one_photo from "../../assets/images/one_photo.jpg";
import { getOrders, getProducts } from "../MainPage/mainPage_func";

const getImage = (name) => {
  return (
    <img src={require(`../../assets/images/${name.toLowerCase()}.jpg`)} alt={name} />
  )
}

function calcSum(order) {
  return Object.keys(order).reduce((acc, key) => {
    return acc + order[key].price * order[key].count;
  }, 0);
}

const checkDisable = (name, phone, order) => {
  return name && phone && Object.keys(order).length;
};

const changeHandler = (e, changeState) => {
  const { value } = e.target;
  changeState(value);
};

export const renderBasket = props => {
  const { data, setData, order, setOrder } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Available</th>
          <th>Price</th>
          <th>Add</th>
        </tr>
        {Object.keys(order).map(key => {
          return (
            <tr key={`${key}`}>
              <td>
                {getImage(key)}
              </td>
              <td>{key}</td>
              <td>{order[key].count}</td>
              <td>{order[key].quantity}</td>
              <td>{order[key].price}</td>
              <td
                className={style.add_button}
                onClick={() => {
                  const tmpData = JSON.parse(JSON.stringify(data));
                  const tmpOrder = JSON.parse(JSON.stringify(order));

                  tmpData.forEach((item, index) => {
                    if (item.name === key && item.quantity > 0) {
                      tmpData[index].quantity = item.quantity - 1;
                      if (tmpOrder[item.name]) {
                        tmpOrder[item.name].count += 1;
                      } else {
                        tmpOrder[item.name] = item;
                        tmpOrder[item.name].count = 1;
                      }
                      tmpOrder[item.name].quantity = tmpData[index].quantity;
                      setOrder(tmpOrder);
                    }
                  });
                  setData(tmpData);
                }}
              >
                +
              </td>
            </tr>
          );
        })}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Total:</td>
          <td>{calcSum(order)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export const renderConfirm = (props, name, setName, phone, setPhone, setStatus) => {
  const { order, setData, setOrders, setOrder } = props;
  return (
    <>
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

      <form className={style.footer_wrapper} onSubmit={event => event.preventDefault()}>
        <div className={style.one_input_wrapper}>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            required
            onChange={e => changeHandler(e, setName)}
            type="text"
            value={name}
          />
        </div>
        <div className={style.one_input_wrapper}>
          <label htmlFor="phone">Phone*</label>
          <input
            id="phone"
            required
            onChange={e => changeHandler(e, setPhone)}
            type="number"
            value={phone}
          />
        </div>
        <div className={style.button_wrapper}>
          <button className={style.basket_button} onClick={() => setStatus(0)}>
            Back to basket
          </button>
          <input
            disabled={!checkDisable(name, phone, order)}
            type="submit"
            className={`${style.basket_button} ${
              checkDisable(name, phone, order) ? "" : style.disabled
            }`}
            value="Create order"
            onClick={() =>
              sendOrder(name, phone, order)
                .then(() => {
                  setStatus(2);
                  getProducts().then(res => setData(res));
                  getOrders().then(res => setOrders(res));
                  setOrder({})
                })
            }
          />
        </div>
      </form>
    </>
  );
};

export async function sendOrder(name, phone, products) {
  const url = "https://sheltered-depths-11645.herokuapp.com/orders";
  const response = await fetch(
    url,
    {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },

      body: JSON.stringify({
        name,
        phone,
        products
      })
    },
    { mode: "no-cors" }
  );
  const myJson = await response.json();
  return myJson;
}
