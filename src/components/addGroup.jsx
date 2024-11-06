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
        <div className={styles.containerPopup} onClick={(e) => e.stopPropagation()}>
          <span className={styles.commonText}>Create New group</span>
          <p className={`${styles.textInput} ${styles.commonText}`}>
            <span>Group Name</span>
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

            <button className={styles.color1} onClick={()=> setSelectedColor('#b38bfa')}></button>
            <button className={styles.color2} onClick={()=> setSelectedColor('#ff79f2')}></button>
            <button className={styles.color3} onClick={()=> setSelectedColor('#43e6fc')}></button>
            <button className={styles.color4} onClick={()=> setSelectedColor('#f19576')}></button>
            <button className={styles.color5} onClick={()=> setSelectedColor('#0047ff')}></button>
            <button className={styles.color6} onClick={()=> setSelectedColor('#6691ff')}></button>
          </div> 
          <button className={styles.createButton} onClick={handleCreate}>create</button>
        </div>
      </div>

    </>
  );
};

export default AddGroup;
