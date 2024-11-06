import React from "react";
import styles from "./mainPage.module.css";
import { bannerPic, privacyPic } from "../data/data";
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
        {/* RIGHT Side */}
        <div className={styles.rightSide}>
          <img
            className={styles.bannerImage}
            src={bannerPic}
            alt="banner image"
          />
          <h1>Pocket Notes</h1>
          <div className={styles.rightSideText}>

            <span className={styles.bannerText}>
              Send and receive messages without keeping your phone online.
            </span>
            <span className={`${styles.bannerText} ${styles.bannerText2}`}>
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </span>
            <div className={styles.privacyContainer}>
              <img src={privacyPic} alt="privacy image" width={"12rem"}/>
              <span>end-to-end encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* pop up for add group */}
      {isPopupOpen && <AddGroup handleClosePopup={handleClosePopup} />}
    </>
  );
};

export default MainPage;
