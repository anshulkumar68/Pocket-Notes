import React, { useState } from "react";
import styles from "./groupDetails.module.css";
import { sendArrowPic } from "../data/data";

const GroupDetails = ({ groupName, groupColor, groupInitial }) => {
  const [writtenNote, setWrittenNote] = useState("");
  const [showNote, setShowNote] = useState(false);

  const hanldeUpdateNote = () => {
    console.log("sent button called");
    setShowNote(true);
    console.log(writtenNote);
  };

  return (
    <>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsTop}>
          {
            <div className={styles.groupDetailsContainer}>
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
            
          }
        </div>
        {/* ==NOTE AREA== */}
        {showNote && (
          <div className={styles.noteContainer}>
            <div className={styles.note}>{writtenNote}</div>
          </div>
        )}

        {/* ==TEXTAREA== */}
        <div className={styles.detailsBottom}>
          <textarea
            placeholder="Enter your text here........."
            value={writtenNote}
            onChange={(e) => setWrittenNote(e.target.value)}
          />
          <img
            className={styles.sendMessage}
            src={sendArrowPic}
            alt="send message arrow"
            onClick={hanldeUpdateNote}
          />
        </div>
      </div>
    </>
  );
};

export default GroupDetails;
