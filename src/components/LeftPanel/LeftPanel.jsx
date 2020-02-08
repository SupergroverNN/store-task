import React, { useState, useEffect } from "react";
import style from "./LeftPanel.module.scss";
import { getLocationInfo } from "./leftPanel_func";

const LeftPanel = () => {
  const [data, setData] = useState({
    city: "Loading..."
  });

  useEffect(() => {
    getLocationInfo().then(res => setData(res));
  }, []);
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.location_info}>
          <span>Your city: </span>
          <p>{data.city}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
