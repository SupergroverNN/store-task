import React from "react";
import style from "./ItemsCard.module.scss";
import {renderCards} from './itemsCard_func';

const ItemsCard = (props) => {

  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.items_wrapper}>
          {renderCards(props)}
        </div>
      </div>
    </div>
  );
  
};

export default ItemsCard;
