import React from 'react'
import StyleSheet from '../styles/navbar.module.css'
import { FaFireFlameCurved } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";


export default function navbar() {

  return (
    <div className={StyleSheet.navbar}>
        <div className={StyleSheet.title}>
            <h2>So<span>Cal</span></h2>
            <p className={StyleSheet.para}>Track calories with your voice</p>
        </div>
        <div className={StyleSheet.rightnav}>
          <div className={StyleSheet.streak}>
              <p><FaFireFlameCurved /> 1-day streak </p>
          </div>
          <div className={StyleSheet.hamburger}>
              <button className={StyleSheet.hamburgerbtn}><GiHamburgerMenu /></button>
          </div>
        </div>
    </div>
  )
}
