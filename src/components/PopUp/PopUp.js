import React, { useEffect, useState } from 'react'
import styles from "./popUp.module.css";

const PopUp = () => {

  const [status, setStatus] = useState(() => {
    const hasStatus = localStorage.getItem("status");
    return hasStatus
      ? JSON.parse(hasStatus)
      : false
  });


  useEffect(() => {
    localStorage.setItem("status", JSON.stringify(status));
  }, [status]);


  return (
    <div className={status ? styles.hide: styles.globalBox}>
      <div className={styles.box}>
        <h1>How To Use</h1>
        <ul>
          <li>Delete: you must delete the given text completely</li>
          <li>Edit: you must click on the given text and edit</li>
          <li>Add: You need to click on the last empty box and add</li>
          <li>The data will not change after the page is refreshed. Enjoy!!</li>
        </ul>
        <button className={styles.ok} onClick={() => {
          setStatus(true)
        }}>OK</button>
      </div>
    </div>
  )
}

export  {PopUp}
