import React from 'react'
import styles from './groupDetails.module.css'
import { sendArrowPic } from '../data/data'

const GroupDetails = () => {
    return (
        <>
            <div className={styles.detailsContainer}>
                <div className={styles.detailsTop}>TOP</div>
                <div>Notes Area</div>
                <div className={styles.detailsBottom}>
                    <textarea
                        placeholder="Enter your text here........."
                       
                    />
                    <img className={styles.sendMessage} src={sendArrowPic} alt="send message arrow" />
                </div>
            </div>
        </>
    )
}

export default GroupDetails
