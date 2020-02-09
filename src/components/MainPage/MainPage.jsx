import React, { useState, useEffect } from "react";
import style from "./MainPage.module.scss";
import LeftPanel from "../LeftPanel/LeftPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ItemsCard from "../ItemsCard/ItemsCard";
import { getProducts, getOrders } from "./mainPage_func";
import Basket from "../Basket/Basket";
import Orders from "../Orders/Orders";

const MainPage = () => {
  const [data, setData] = useState([]);
  const [isBasket, setIsBasket] = useState(false);
  const [isOrders, setIsOrders] = useState(false);
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState({});
  const [active, setActive] = useState("home");

  useEffect(() => {
    getProducts().then(res => setData(res));
    getOrders().then(res => setOrders(res));
  }, []);
  return (
    <>
      {isBasket && (
        <Basket
          setActive={setActive}
          data={data}
          setData={setData}
          order={order}
          setOrder={setOrder}
          setOrders={setOrders}
          setIsBasket={setIsBasket}
        />
      )}
      {isOrders && <Orders setActive={setActive} orders={orders} setIsOrders={setIsOrders} />}
      <div className={style.main}>
        <Header
          active={active}
          setActive={setActive}
          data={data}
          setData={setData}
          order={order}
          setOrder={setOrder}
          setIsBasket={setIsBasket}
          setIsOrders={setIsOrders}
        />
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
