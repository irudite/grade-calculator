import React from 'react'
import { useState } from 'react'
import './Grader.css'

const Grader = () => {
  const [category, setCategory] = useState('')
  const [weight, setWeight] = useState('')
  const [grade, setGrade] = useState('')
  const [row, setRow] = useState([])

  const addRow = () => {
    if (category && weight && grade) {
      const newRow = {category, weight, grade: parseFloat(grade)};
      setRow([...row, newRow]);
      setCategory('');
      setWeight('');
      setGrade('');
    }  
    else {
      console.log("Please fill in all fields");
    }
  }

  return (
    <>
      <div class='grader'>
        <div class='container grader__img'>
          <img alt='school-logo' src='/school.svg'/> 
        </div>
        
        <div class='container grader__list'>
          <div class='grader__list--title'>
            <h4> Assigment Category </h4> 
            <input placeholder='Enter category' 
            type="text" value={category} onChange={(e) => {setCategory(e.target.value)}}/>
          </div>
          <div class='grader__list--weight'>
            <h4> Weight </h4> 
            <input placeholder='Enter weight' 
            type="number" value={weight} onChange={(e) => {setWeight(e.target.value)}}/>
          </div>
          <div class='grader__list--grade'>
            <h4> Grade </h4>
            <input placeholder='Enter grade'
            type="number" value={grade} onChange={(e) => {setGrade(e.target.value)}}/>
          </div>
          <button onClick={addRow}> Add Category </button>
        </div>
      </div>
      <hr/>

      <div class='grader__table'>
        <h4> Grade List: </h4>
        <table>
          <thead>
            <tr>
              <th> Category </th>
              <th> Weight (%) </th>
              <th> Grade (%) </th> 
            </tr>
          </thead>

          <tbody>
            {row.map((e, index) => (
              <tr key={index}>
                <td>{e.category}</td>
                <td>{e.weight}</td>
                <td>{e.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Grader
