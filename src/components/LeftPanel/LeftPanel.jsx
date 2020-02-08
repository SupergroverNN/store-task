import React, { useState, useEffect } from "react";
import style from "./LeftPanel.module.scss";
import { getLocationInfo } from "./leftPanel_func";

const LeftPanel = () => {
  const [data, setData] = useState({
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
        </div>
        <h4>Filters:</h4>
        {/* <div className={style.filter_wrapper}>
          <ul>
            <li>Nose</li>
            <li>Color</li>
            <li>Price</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default LeftPanel;
