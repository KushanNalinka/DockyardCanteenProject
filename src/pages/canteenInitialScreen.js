import React from 'react'
import Navbar from '../components/navbar';
import MealSelector from '../components/canteenMealSelector'

const initialScreen = () => {
  return (
    <>
    <Navbar />
    <MealSelector />
    </>
  )
}

export default initialScreen