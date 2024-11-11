import React, { useEffect, useState } from "react";
import styles from "./groupDetails.module.css";
import { backPic, sendDisablePic, sendEnablePic } from "../data/data";


const GroupDetails = ({ groupName, groupColor, groupInitial, handleBackButtonClick, isMobileView }) => {
  const [currentNote, setCurrentNote] = useState("");
  const [noteArea, setNoteArea] = useState([]);

  // Function to get notes for the specific group from local storage
  useEffect(() => {
    const savedNotes =
      JSON.parse(localStorage.getItem(`notes_${groupName}`)) || [];
    setNoteArea(savedNotes);
  }, [groupName]);

  // Save updated notes for the current group in local storage
  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem(`notes_${groupName}`, JSON.stringify(notes));
  };

  // Add a new note with a timestamp
  const handleAddNote = () => {
    if (currentNote.trim() !== "") {
      const newNote = {
        text: currentNote,
        timeStamp: getCurrentDateTime(),
      };
      const updatedNotes = [...noteArea, newNote];
      setNoteArea(updatedNotes);
      saveNotesToLocalStorage(updatedNotes); // Save to local storage
      setCurrentNote(""); // Clear the input field
    }
  };

  // Handle Enter key for adding note
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevents newline in textarea
      handleAddNote();
    }
  };

  // Format date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const dateOptions = { day: "numeric", month: "short", year: "numeric" };
    const date = now.toLocaleDateString(undefined, dateOptions);

    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
    const time = now.toLocaleTimeString(undefined, timeOptions);
    return `${date} • ${time}`;
  };

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsTop}>
        <div className={styles.groupDetailsContainer}>
        {isMobileView && (
          <img src={backPic} className={styles.backButton} alt="back button" onClick={handleBackButtonClick} />
        )}
          <div
            className={styles.listItemLogo}
            style={{
              backgroundColor: groupColor, // Use the selected color
            }}
          >
            {groupInitial}
          </div>
          <span className={styles.listItemName}>{groupName}</span>
        </div>
      </div>

      {/* Note Display Area */}
      <div className={styles.noteArea}>
        {noteArea.map((listItem, index) => (
          <div key={index} className={`${styles.noteContainer} ${styles.note}`}>
            {listItem.text}
            <div className={styles.noteDateTime}>{listItem.timeStamp}</div>
          </div>
        ))}
      </div>

      {/* Text Area for Adding Notes */}
      <div className={styles.detailsBottom}>
        <textarea
          placeholder="Enter your text here........."
          value={currentNote}
          onKeyDown={handleKeyDown} // Detect Enter key press
          onChange={(e) => setCurrentNote(e.target.value)}
        />
      
        <img
          className={styles.sendButton}
          src={currentNote.trim() ? sendEnablePic : sendDisablePic}
          style={{ cursor: currentNote.trim() ? "pointer" : "not-allowed" }}
          alt="send message arrow"
          onClick={handleAddNote}
        />
      
      </div>
    </div>
  );
};

export default GroupDetails;
