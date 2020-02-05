import React, { useState, useEffect } from "react";
import style from "./LeftPanel.module.scss";
import { getLocationInfo } from "./leftPanel_func";

const LeftPanel = () => {
  const [data, setData] = useState({
    loc: "no data",
    city: "no data"
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
          <span>Your location: </span>
          <p>{data.loc}</p>
        </div>
        <h4>Filters:</h4>
      </div>
    </div>
  );
};

export default LeftPanel;
