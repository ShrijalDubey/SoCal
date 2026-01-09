import React from 'react'
import Navbar from './components/navbar'
import CaloriesChart from './components/CaloriesChart'
import FoodLog from './components/FoodLog'  
import BottomMic from './components/BottomMic'

export default function App() {
  return (
    <div>
      <Navbar />
      <CaloriesChart />
      <FoodLog />
      <BottomMic />
    </div>
  )
}
