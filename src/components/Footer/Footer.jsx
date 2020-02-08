import React from "react";
import style from "./Footer.module.scss";

import github from '../../assets/icons/github.svg';
import instagram from '../../assets/icons/instagram.svg';
import vk from '../../assets/icons/vk.svg';

const Footer = () => {
  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.social}>
          <a href="https://github.com/SupergroverNN/store-task" target="_blank" rel="noopener noreferrer"> <img src={github} alt="github logo"/></a>
          <img src={instagram} alt="instagram logo"/>
          <img src={vk} alt="vk logo"/>
        </div>
        <span className={style.copyright}>© SupergroverNN 2020</span>
      </div>
    </div>
  );
};

export default Footer;
