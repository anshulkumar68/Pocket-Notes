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

  //  Load notes from localStorage on mount
  useEffect(()=>{
    try{
      const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
      setNotes(storedNotes); // to initialize the state with any previously saved notes
    }
    catch(error){
      console.error("Error loading notes from localstorage", error);
      setNotes([]); // Fallback to an empty array if there is an error
    }
  },[])

  const addNote = (name, color) => {
    // Check if a note with the same name already exists
    const existingNote = notes.find(
      (note) => note.name.toLowerCase() === name.toLowerCase()
    );

    if (existingNote) {
      return; // Prevent adding the note
    }

    try {
      const newNotes = [...notes, { name, color }]; // Add the entered text to notes
      setNotes(newNotes);

      // Save updated notes array to localStorage
      localStorage.setItem("notes", JSON.stringify(newNotes));
    } catch (error) {
      console.error("Error saving notes to localStorage:", error);
    }
  };

  // to handle open pop-up
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  // to handle close pop-up
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // to handle display group details
  const handleShowDetails = (initials, name, color) => {
    setShowDetails(!showDetails); // toggle state
    setGroupName(name);
    setGroupColor(color);
    setGroupInitial(initials);
  };

  // save user
  const saveUser = () => {
    localStorage.setItem("user");
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
                <>
                  <li
                    key={`${name}-${color}`}
                    className={styles.listItems}
                    onClick={() => handleShowDetails(initials, name, color)}
                  >
                    <div
                      className={styles.listItemLogo}
                      style={{
                        backgroundColor: color, // Use the selected color
                      }}
                    >
                      {initials}
                    </div>
                    <span className={styles.listItemName}>{name}</span>
                  </li>
                </>
              );
            })}
          </ul>
          <div>
          <div className={styles.addButtonContainer}>
            <span className={styles.addButton} onClick={handleOpenPopup}>
              +
            </span>
          </div>

          </div>
        </div>

        {/* Details Component */}
        {showDetails && (
          <GroupDetails
            groupName={groupName}
            groupColor={groupColor}
            groupInitial={groupInitial}
          />
        )}

        {/* RIGHT Side */}
        {!showDetails && (
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
                <img src={privacyPic} alt="privacy image" width={"12rem"} />
                <span>end-to-end encrypted</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* pop up for add group */}
      {isPopupOpen && (
        <AddGroup handleClosePopup={handleClosePopup} addNote={addNote} />
      )}
    </>
  );
};

export default MainPage;
