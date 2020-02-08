import React from "react";
import style from "./Header.module.scss";
import config from '../../Fire';
import firebase from 'firebase';
import google_logo from '../../assets/images/google_logo.png';

export const menu = ["home", "orders", "basket"];

export function renderMenu(active, setActive, setIsBasket, setIsOrders) {
  return (
    <ul>
      {menu.map((item, index) => {
        switch (item) {
          case "basket":
            return (
              <li
                key={`${item}${index}`}
                onClick={() => {
                  setActive(item);
                  setIsBasket(true);
                }}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
          case "orders":
            return (
              <li
                key={`${item}${index}`}
                onClick={() => {
                  setActive(item);
                  setIsOrders(true);
                }}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
          default:
            return (
              <li
                key={`${item}${index}`}
                onClick={() => setActive(item)}
                className={active === item ? style.active : ""}
              >
                {item}
              </li>
            );
        }
      })}
    </ul>
  );
}

export function googleSignIn(setData) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const base_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(base_provider)
    .then((result) => {
      localStorage.setItem(
        'user',
        JSON.stringify(result.additionalUserInfo.profile)
      );
      setData(result.additionalUserInfo.profile);
    })
    .catch((err) => console.log(err));
    return 'signIn';
}

export function googleSignOut(setData) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  firebase
    .auth()
    .signOut()
    .then((result) => {
      localStorage.removeItem('user');
      setData(null);
    })
    .catch((err) => console.log(err));
    return 'signOut';
}

export function renderContent(data, setData) {
  if (data && data.picture) {
    return (
      <div className={style.signout_wrapper}>
        <img src={data.picture} alt="signout"></img>
        <p>{data.name}</p>
        <button id="signout" onClick={() => googleSignOut(setData)} type="button">
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className={style.auth}>
        <img title="google auth" onClick={() => googleSignIn(setData)} src={google_logo} alt="google logo"/>
      </div>
    );
  }
}