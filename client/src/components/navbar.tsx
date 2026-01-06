import React from 'react'
import StyleSheet from '../styles/navbar.module.css'
import { FaFireFlameCurved } from "react-icons/fa6";


export default function navbar() {
  return (
    <div className={StyleSheet.navbar}>
        <div className={StyleSheet.title}>
            <h2>So<span>Cal</span></h2>
            <p>Track calories with your voice</p>
        </div>
        <div className={StyleSheet.streak}>
            <p><FaFireFlameCurved /> Start your streak!</p>
        </div> 

    </div>
  )
}
