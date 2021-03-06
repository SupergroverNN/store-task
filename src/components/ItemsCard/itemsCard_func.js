import React from "react";
import style from "./ItemsCard.module.scss";
import basket_icon from '../../assets/icons/basket_icon.png';

const getImage = (name) => {
  return (
    <img src={require(`../../assets/images/${name.toLowerCase()}.jpg`)} alt={name} />
  )
}

export const renderCards = (props) => {
  const {data, setData, order, setOrder} = props;

  function changeQuantity(id) {
    const tmpData = JSON.parse(JSON.stringify(data));
    const tmpOrder = JSON.parse(JSON.stringify(order));
    
    tmpData.forEach((item, index) => {
      if(item._id === id && item.quantity > 0) {
        tmpData[index].quantity = item.quantity - 1;
        if (tmpOrder[item.name]) {
          tmpOrder[item.name].count += 1;
          tmpOrder[item.name].quantity = tmpData[index].quantity;
        } else {
          tmpOrder[item.name] = item;
          tmpOrder[item.name].count = 1;
          tmpOrder[item.name].quantity = tmpData[index].quantity;
        }
        setOrder(tmpOrder);
      }
    })
    setData(tmpData);
  }
  
  return data.map(item => (
    <div key={`${item.name}${item.id}`} className={style.one_item}>
      {getImage(item.name)}
      <div className={style.params}>
        
        <div className={style.one_param}>
          <span>Name: </span>
          <p>{item.name}</p>
        </div>

        <div className={style.one_param}>
          <span>Color: </span>
          <p>{item.color}</p>
        </div>

        <div className={style.one_param}>
          <span>Quantity: </span>
          <p>{item.quantity}</p>
        </div>

        <div className={style.one_param}>
          <span>Price: </span>
          <p>{item.price}</p>
        </div>

        <div onClick={()=>changeQuantity(item._id)} className={style.add_to_order}>
          <p>Add to order</p>
          <img src={basket_icon} alt="add icon"/>
        </div>
      </div>
    </div>
  ))
  }