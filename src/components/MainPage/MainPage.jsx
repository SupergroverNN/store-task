import React from "react";
import style from "./MainPage.module.scss";
import LeftPanel from "../LeftPanel/LeftPanel";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainPage = () => {
  return (
    <>
      <div className={style.main}>
        <Header />
        <LeftPanel />
        <Footer />
        <div className={style.main_bg}></div>
      </div>
    </>
  );
};

export default MainPage;
