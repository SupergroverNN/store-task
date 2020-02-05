import React from "react";
import style from "./LeftPanel.module.scss";

const LeftPanel = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <h3>Your current location:</h3>
        <h4>Filters:</h4>
      </div>
    </div>
  );
};

export default LeftPanel;
