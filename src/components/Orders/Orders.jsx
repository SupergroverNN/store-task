import React from "react";
import style from "./Orders.module.scss";
import close_icon from "../../assets/icons/close_icon.jpg";

function calcCount(orders) {
  return Object.keys(orders).reduce((acc, key) => {
    return acc + orders[key].count;
  }, 0);
}

const Orders = props => {
  const { setIsOrders, orders, setActive } = props;

  return (
    <div className={style.main}>
      <div className={style.content}>
        <img
          title="close"
          className={style.close_button}
          onClick={() =>{ setIsOrders(false); setActive('home')}}
          src={close_icon}
          alt="close"
        />
        <h1>completed orders</h1>
        <div className={style.orders_wrapper}>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Order positions</th>
              </tr>
              {orders.map(order => {
                return (
                  <tr key={`${order._id}`}>
                    <td>{order.name}</td>
                    <td>{order.phone}</td>
                    <td>{calcCount(order.products)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
