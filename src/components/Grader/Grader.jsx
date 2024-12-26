import React from 'react'
import './Grader.css'

const Grader = () => {
  return (
    <div class='grader'>
      <div class='container grader__img'>
        <img alt='school-logo' src='/school.svg'/> 
      </div>
      
      <div class='container grader__list'>
        <div class='grader__list--title'>
          <h4> Assigment Category </h4> 
          <input placeholder='Enter category' type="number"/>
        </div>
        <div class='grader__list--weight'>
          <h4> Weight </h4> 
          <input placeholder='Enter weight' type="number"/>
        </div>
        <div class='grader__list--grade'>
          <h4> Grade </h4>
          <input placeholder='Enter grade' type="number"/>
        </div>
        <button> Add Category </button>
      </div>
      <hr/>
    </div>
  )
}

export default Grader
