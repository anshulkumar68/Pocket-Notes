import styles from "./addGroup.module.css";

const AddGroup = ({ handleClosePopup }) => {
  return (
    <>
      <div className={styles.overlay} onClick={handleClosePopup}>
        <div className={styles.containerPopup}  onClick={(e) => e.stopPropagation()}>
          <span className={styles.commonText}>Create New group</span>
          <p className={`${styles.textInput} ${styles.commonText}`}>
            <span>Group Name</span>
            <input
              className={styles.textField}
              type="text"
              placeholder="Enter group name"
            />
          </p>
          <div className={styles.colorPlateContainer}>
            <p className={styles.commonText}>Choose colour</p>

            <button className={styles.color1}></button>
            <button className={styles.color2}></button>
            <button className={styles.color3}></button>
            <button className={styles.color4}></button>
            <button className={styles.color5}></button>
            <button className={styles.color6}></button>
          </div>
          <button className={styles.createButton}>create</button>
        </div>
      </div>

      {/* add group */}
    </>
  );
};

export default AddGroup;
