import React from "react";
import style from "./ItemsCard.module.scss";
import one_photo from "../../assets/images/one_photo.jpg";

const fakeData = [
  {
    id: 1,
    name: "firstItem",
    photo: "photo1",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 2,
    name: "firstItem",
    photo: "photo2",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 3,
    name: "firstItem",
    photo: "photo3",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 4,
    name: "firstItem",
    photo: "photo4",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 5,
    name: "firstItem",
    photo: "photo5",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 6,
    name: "firstItem",
    photo: "photo6",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 7,
    name: "firstItem",
    photo: "photo7",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 8,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 9,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 8,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 9,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 8,
    name: "firstItem",
    photo: "photo8",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  },
  {
    id: 9,
    name: "firstItem",
    photo: "photo9",
    price: 100,
    nose: true,
    color: "green",
    quantity: 12
  }
];

const ItemsCard = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.items_wrapper}>
          {fakeData.map(item => (
            <div key={`${item.name}${item.id}`} className={style.one_item}>
              <img src={one_photo} alt={item.name} />
              <div className={style.params}>
                
                <div className={style.one_param}>
                  <span>Nose: </span>
                  <p>{item.nose ? "yes" : "no"}</p>
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
