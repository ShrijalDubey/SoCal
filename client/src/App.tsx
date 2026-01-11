import React from 'react'
import Navbar from './components/navbar'
import CaloriesChart from './components/CaloriesChart'
import FoodLog from './components/FoodLog'  
import BottomMic from './components/BottomMic'
import Profile from './components/Profile'

export default function App() {
  return (
    <div>
      <Navbar />
      <Profile />
    </div>
  )
}
