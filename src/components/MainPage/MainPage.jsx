import React, { useState, useEffect } from "react";
import style from "./MainPage.module.scss";
import LeftPanel from "../LeftPanel/LeftPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ItemsCard from "../ItemsCard/ItemsCard";
import { fakeData, getProducts } from "./mainPage_func";
import Basket from "../Basket/Basket";

// {

//   "Zeliboba": {
//     "id": 1,
//     "name": "Zeliboba",
//     "price": 100,
//     "color": "blue",
//     "quantity": 10,
//     "count": 1
//   },
//   "Kermit":{
//     "id": 3,
//     "name": "Kermit",
//     "price": 120,
//     "color": "green",
//     "quantity": 11,
//     "count": 1
//   }

// }

const MainPage = () => {
  const [data, setData] = useState(fakeData);
  const [isBasket, setIsBasket ] = useState(true);
  const [order, setOrder] = useState({});
  useEffect(() => {
    getProducts()
  }, []);
  return (
    <>
      {isBasket && <Basket data={data} setData={setData} order={order} setOrder={setOrder} setIsBasket={setIsBasket}/>}
      <div className={style.main}>
        <Header data={data} setData={setData} order={order} setOrder={setOrder} setIsBasket={setIsBasket}/>
        <div className={style.central_content}>
          <LeftPanel />
          <ItemsCard data={data} setData={setData} order={order} setOrder={setOrder} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
