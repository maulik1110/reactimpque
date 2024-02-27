import React, { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import './App.css'
import Randomcol from './components/hexcol/Randomcol'
import Rating from './components/rating/Rating'

const App = () => {
  return (
    <div className='mainn'>
      <Accordian/>

      <Randomcol/>

      <Rating noOfStar={5} />
    </div>
  )
}

export default App