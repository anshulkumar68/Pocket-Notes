import styles from "./addGroup.module.css";
import React, { useState } from "react";

const AddGroup = ({ handleClosePopup, addNote }) => {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#b38bfa"); // Default color

  const handleCreate = () => {
    if (groupName.trim()) {
      addNote(groupName, selectedColor); // Add note to the left side
      setGroupName(""); // Clear input field
      setSelectedColor("#ccc"); // Reset to default color
      handleClosePopup(); // Close the pop-up
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={handleClosePopup}>
        <div
          className={styles.containerPopup}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.commonText}>Create New group</span>
          <p className={styles.textInput}>
            <span className={styles.commonText}>Group Name</span>
            <input
              className={styles.textField}
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </p>
          <div className={styles.colorPlateContainer}>
            <p className={styles.commonText}>Choose colour</p>

            <button
              className={styles.color1}
              style={{
                border:
                  selectedColor === "#b38bfa" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#b38bfa")}
            ></button>
            <button
              className={styles.color2}
              style={{
                border:
                  selectedColor === "#ff79f2" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#ff79f2")}
            ></button>
            <button
              className={styles.color3}
              style={{
                border:
                  selectedColor === "#43e6fc" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#43e6fc")}
            ></button>
            <button
              className={styles.color4}
              style={{
                border:
                  selectedColor === "#f19576" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#f19576")}
            ></button>
            <button
              className={styles.color5}
              style={{
                border:
                  selectedColor === "#0047ff" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#0047ff")}
            ></button>
            <button
              className={styles.color6}
              style={{
                border:
                  selectedColor === "#6691ff" ? "2px solid black" : "none",
              }}
              onClick={() => setSelectedColor("#6691ff")}
            ></button>
          </div>
          <button className={styles.createButton} onClick={handleCreate}>
            create
          </button>
        </div>
      </div>
    </>
  );
};

export default AddGroup;
