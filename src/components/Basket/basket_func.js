import React from 'react';
import style from './Basket.module.scss';
import one_photo from "../../assets/images/one_photo.jpg";

function calcSum(order) {
  return Object.keys(order).reduce((acc, key) => {
    return acc + order[key].price * order[key].count;
  }, 0);
}

export const renderBasket = (props) => {
  const { data, setData, order, setOrder, setIsBasket } = props;

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
              <img src={one_photo} alt={key} />
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
  )
}