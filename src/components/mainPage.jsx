import React from "react";
import styles from "./mainPage.module.css";
import { bannerPic } from "../data/data";
import { useState } from "react";
import AddGroup from "./addGroup";

const MainPage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    console.log("overlay pressed");
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftSide}>
          <h2>Pocket Notes</h2>
          <div className={styles.addButtonContainer}>
            <span className={styles.addButton} onClick={handleOpenPopup}>
              +
            </span>
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
          <span>end-to-end encrypted</span>
        </div>
      </div>

      {/* pop up for add group */}
      {isPopupOpen && <AddGroup handleClosePopup={handleClosePopup}/>}
    </>
  );
};

export default MainPage;
