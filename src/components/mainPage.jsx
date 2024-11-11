import React, { useEffect } from "react";
import styles from "./mainPage.module.css";
import { bannerPic, privacyPic } from "../data/data";
import { useState } from "react";
import AddGroup from "./addGroup";
import GroupDetails from "./groupDetails";

const MainPage = () => {
  const [notes, setNotes] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [groupName, setGroupName] = useState(null);
  const [groupInitial, setGroupInitial] = useState(null);
  const [groupColor, setGroupColor] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load notes from localStorage on mount
  useEffect(() => {
    try {
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(storedNotes);
    } catch (error) {
      console.error("Error loading notes from localstorage", error);
      setNotes([]);
    }
  }, []);

  const addNote = (name, color) => {
    const existingNote = notes.find(
      (note) => note.name.toLowerCase() === name.toLowerCase()
    );

    if (existingNote) return;

    try {
      const newNotes = [...notes, { name, color }];
      setNotes(newNotes);
      localStorage.setItem("notes", JSON.stringify(newNotes));
    } catch (error) {
      console.error("Error saving notes to localStorage:", error);
    }
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleShowDetails = (initials, name, color) => {
    if (selectedGroup === name) {
      // Temporarily set selectedGroup to null to trigger re-render
      setSelectedGroup(null);
      // Use a short timeout to set selectedGroup back to the desired group
      setTimeout(() => {
        setGroupName(name);
        setGroupColor(color);
        setGroupInitial(initials);
        setSelectedGroup(name);
        setShowDetails(true);
      }, 0);
    } else {
      setGroupName(name);
      setGroupColor(color);
      setGroupInitial(initials);
      setSelectedGroup(name);
      setShowDetails(true);
    }

    // Hide left side on mobile view
    if (isMobileView) {
      document.querySelector(`.${styles.leftSide}`).style.display = "none";
    }
  };

  // to handle back button
  const handleBackButtonClick = () => {
    setShowDetails(false);
    if (isMobileView) {
      document.querySelector(`.${styles.leftSide}`).style.display = "block";
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftSide}>
          <h2>Pocket Notes</h2>
          <ul>
            {notes.map((item, index) => {
              const { name, color } = item;
              const nameParts = name.split(" ");
              const initials =
                nameParts.length > 1
                  ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
                  : nameParts[0][0].toUpperCase();

              return (
                <li
                  key={`${name}-${color}`}
                  className={styles.listItems}
                  onClick={() => handleShowDetails(initials, name, color)}
                  style={{
                    backgroundColor:
                      selectedGroup === name ? "#e5e5e5" : "white",
                  }}
                >
                  <div
                    className={styles.listItemLogo}
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                  <span className={styles.listItemName}>{name}</span>
                </li>
              );
            })}
          </ul>

          {/* <div className={styles.addButtonContainer}>
            <p className={styles.addButton} onClick={handleOpenPopup}>
              +
            </p>
          </div> */}

          <div className={styles.addButtonContainer}>+</div>
        </div>

        {showDetails ? (
          <GroupDetails
            groupName={groupName}
            groupColor={groupColor}
            groupInitial={groupInitial}
            handleBackButtonClick={handleBackButtonClick}
            isMobileView={isMobileView}
          />
        ) : (
          <div className={styles.rightSide}>
            <img
              className={styles.bannerImage}
              src={bannerPic}
              alt="banner image"
            />
            <h1>Pocket Notes</h1>
            <div className={styles.rightSideTextContainer}>
              <div className={styles.noteLineContainer}>
                <span className={styles.bannerText}>
                  Send and receive messages without keeping your phone online.
                </span>
                <span className={`${styles.bannerText} ${styles.bannerText2}`}>
                  Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </span>
              </div>
              <div className={styles.privacyContainer}>
                <img src={privacyPic} alt="privacy image" width={"12rem"} />
                <span>end-to-end encrypted</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {isPopupOpen && (
        <AddGroup handleClosePopup={handleClosePopup} addNote={addNote} />
      )}
    </>
  );
};

export default MainPage;
