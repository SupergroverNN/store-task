import React from "react";
import style from "./MainPage.module.scss";
import LeftPanel from "../LeftPanel/LeftPanel";

const MainPage = () => {
  return (
    <>
      <div className={style.main_bg}></div>
      <div className={style.main}>
        <LeftPanel />
      </div>
    </>
  );
};

export default MainPage;
