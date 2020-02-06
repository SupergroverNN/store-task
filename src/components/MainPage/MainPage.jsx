import React from "react";
import style from "./MainPage.module.scss";
import LeftPanel from "../LeftPanel/LeftPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ItemsCard from "../ItemsCard/ItemsCard";

const MainPage = () => {
  return (
    <>
      <div className={style.main}>
        <Header />
        <div className={style.central_content}>
          <LeftPanel />
          <ItemsCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainPage;
