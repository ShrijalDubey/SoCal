import React from 'react'
import styles from '../styles/BottomMic.module.css'
import { RiMicFill } from "react-icons/ri";
import { CiKeyboard } from "react-icons/ci";

export default function BottomMic() {
  return (
    <div className={styles.Container}>
            <button className={styles.keypadButton}>
                <CiKeyboard />
            </button>
            <button className={styles.micButton}>
                <RiMicFill />
            </button> 
    </div>
  )
}
