import React from "react";
import styles from "./mainPage.module.css";
import { bannerPic } from "../data/data";

const MainPage = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftSide}>
          <h2>Pocket Notes</h2>
          <div className={styles.addButtonContainer}>
            <span className={styles.addButton}>+</span>
          </div>
        </div>
        <div className={styles.rightSide}>
          <img
            className={styles.bannerImage}
            src={bannerPic}
            alt="banner image"
          />
          <h1>Pocket Notes</h1>
          <span className={styles.bannerText}>
            Send and receive messages without keeping your phone online.
          </span>
          <span className={styles.bannerText}>
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </span>
        </div>
      </div>
    </>
  );
};

export default MainPage;
